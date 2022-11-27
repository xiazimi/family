/**
 * fetch entry
 */
import querystring from "querystring";
import { omitBy, isPlainObject } from "lodash";
import JSONbig from "json-bigint";
import { isNil } from "@/utils";
import $fetch from "./fetch";

export type API = {
  url: string | ((params: any) => string);
  method: string;
};

interface IFetch {
  api: API;
  params?: IMutableObject;
  RESTful?: boolean;
  multipartFormData?: boolean;
  header?: IMutableObject;
  succeed?: Function | undefined;
  credentials?: string;
  showMessage?: boolean;
  allowOmit?: boolean;
  timeout?: number;
  needTransform?: boolean;
}

const JSONParser = JSONbig({ storeAsString: true });

const fetch = ({
  api,
  params,
  multipartFormData = false,
  header = {},
  succeed = undefined,
  credentials = "include",
  showMessage = true,
  allowOmit = true,
  needTransform = true,
}: IFetch): Promise<any> => {
  let path = "";
  const { url, method } = api;
  const config: IMutableObject = {
    method,
    credentials,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "start-date": new Date().toUTCString(),
      ...header,
    },
    transformResponse: (data: any) => {
      if (!needTransform) return data;
      try {
        return JSONParser.parse(data);
      } catch (e: any) {
        return {
          code: "JSON_PARSE_ERROR",
          data,
          msg: e.message,
        };
      }
    },
  };
  const _params =
    allowOmit && isPlainObject(params) ? omitBy(params, isNil) : params;
  if (typeof url === "string") {
    path = url;
  }
  if (method === "GET") {
    const $params = isPlainObject(_params)
      ? querystring.stringify(_params)
      : _params;
    if ($params) {
      path = `${url}?${$params}`;
    }
  } else {
    if (multipartFormData) {
      const formData = new window.FormData();
      for (const name in _params) {
        const value = isPlainObject(_params[name])
          ? JSON.stringify(_params[name])
          : _params[name];
        formData.append(name, value);
      }
      config.data = formData;
    } else {
      config.headers["Content-Type"] = "application/json";
      config.data = JSON.stringify(_params ?? {});
    }
  }
  return $fetch.request(path, config, succeed, showMessage);
};

export default fetch;
