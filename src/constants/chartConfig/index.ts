import { IMultipleInputNumberConfig } from "@/components/MultipleInputNumber";
import { LightChartOptionType } from "@/pages/Workbench/components/ChartConfig/types";
import {
  AXIS_ENUM_LIST,
  AXIS_TYPE_ENUM_LIST,
  BLENDE_MODE_ENUM_LIST,
  COLOR_LEGEND_TYPE_ENUM_LIST,
  CROSSHAIRS_TYPE_ENUM_LIST,
  CURSOR_ENUM_LIST,
  DATAMARKER_POINTS_TYPE_ENUM_LIST,
  MARKER_SYMBOL_ENUM_LIST,
  FACET_TYPE_ENUM_LIST,
  FONT_STYLE_ENUM_LIST,
  FONT_VARIANT_ENUM_LIST,
  FONT_WEIGHT_ENUM_LIST,
  HORIONTAL_ALIGN_ENUM_LIST,
  INTERACTIONS_ENUM_LIST,
  LEGEND_POSITION_ENUM_LIST,
  LINE_CAP_ENUM_LIST,
  LINE_JOIN_ENUM_LIST,
  ORIENT_ENUM_LIST,
  PADDING_MULTIPLE_CONFIG,
  POINTER_EVENTS_ENUM_LIST,
  RICH_ENUM_LIST,
  SELECTED_MODE_ENUM_LIST,
  SHAPE_ENUM_LIST,
  TITLE_ALIGN_ENUM_LIST,
  TRIGGER_ENUM_LIST,
  TRIGGER_ON_ENUM_LIST,
  VERTICAL_ALIGN_ENUM_LIST,
  COORD_ENUM_LIST,
  COLOR_LEGEND_ALIGN_ENUM_LIST,
  SERIES_LABEL_POSITION,
  FUNNEL_LEGEND_TYPE,
} from "./enum";

export enum ARRAY_TYPE {
  Color = 1,
  Padding,
  Number,
  String,
  Date,
  Select,
  BorderRadius,
}
export enum CUSTOM_CONFIG_KEYS {
  base = "base",
  xAxis = "xAxis",
  yAxis = "yAxis",
  angleAxis = "angleAxis",
  radiusAxis = "radiusAxis",
  grid = "grid",
  polar = "polar",
  title = "title",
  legend = "legend",
  tooltip = "tooltip",
  colorLegend = "colorLegend",
  slider = "slider",
  brush = "brush",
  facet = "facet",
  dataZoom = "dataZoom",
  dataMarker = "dataMarker",
  calendar = "calendar",
  series = "series",
  plugins = "plugins",
}

// 覆盖 field 的 type
export const FIELD_TYPE: Record<string, LightChartOptionType[]> = {
  "series.line.encode.color": ["string"],
};

// 哪些根节点是Array类型
export const ARRAY_TYPE_ROOT_KEY: CUSTOM_CONFIG_KEYS[] = [
  CUSTOM_CONFIG_KEYS.dataMarker,
  CUSTOM_CONFIG_KEYS.xAxis,
  CUSTOM_CONFIG_KEYS.yAxis,
  CUSTOM_CONFIG_KEYS.angleAxis,
  CUSTOM_CONFIG_KEYS.radiusAxis,
  CUSTOM_CONFIG_KEYS.polar,
  CUSTOM_CONFIG_KEYS.grid,
  CUSTOM_CONFIG_KEYS.series,
  CUSTOM_CONFIG_KEYS.slider,
  CUSTOM_CONFIG_KEYS.dataZoom,
  CUSTOM_CONFIG_KEYS.plugins,
];
// 渲染配置对应 okee config 字段名
export const CUSTOM_CONFIG_KEYS_NAME: Record<CUSTOM_CONFIG_KEYS, string> = {
  [CUSTOM_CONFIG_KEYS.base]: "base",
  [CUSTOM_CONFIG_KEYS.xAxis]: "xAxis",
  [CUSTOM_CONFIG_KEYS.yAxis]: "yAxis",
  [CUSTOM_CONFIG_KEYS.angleAxis]: "angleAxis",
  [CUSTOM_CONFIG_KEYS.radiusAxis]: "radiusAxis",
  [CUSTOM_CONFIG_KEYS.grid]: "grid",
  [CUSTOM_CONFIG_KEYS.polar]: "polar",
  [CUSTOM_CONFIG_KEYS.title]: "title",
  [CUSTOM_CONFIG_KEYS.legend]: "legend",
  [CUSTOM_CONFIG_KEYS.tooltip]: "tooltip",
  [CUSTOM_CONFIG_KEYS.colorLegend]: "colorLegend",
  [CUSTOM_CONFIG_KEYS.slider]: "slider",
  [CUSTOM_CONFIG_KEYS.brush]: "brush",
  [CUSTOM_CONFIG_KEYS.facet]: "facet",
  [CUSTOM_CONFIG_KEYS.dataMarker]: "dataMarker",
  [CUSTOM_CONFIG_KEYS.calendar]: "calendar",
  [CUSTOM_CONFIG_KEYS.series]: "series",
  [CUSTOM_CONFIG_KEYS.dataZoom]: "dataZoom",
  [CUSTOM_CONFIG_KEYS.plugins]: "plugins",
};
// 渲染配置一级文件夹下的children
export const CHART_CONFIG_ROOT_KEY: Record<CUSTOM_CONFIG_KEYS, string[]> = {
  [CUSTOM_CONFIG_KEYS.base]: [
    "colors",
    "animate",
    "theme",
    "background",
    "padding",
    "interactions",
  ],
  [CUSTOM_CONFIG_KEYS.xAxis]: ["xAxis"],
  [CUSTOM_CONFIG_KEYS.yAxis]: ["yAxis"],
  [CUSTOM_CONFIG_KEYS.angleAxis]: ["angleAxis"],
  [CUSTOM_CONFIG_KEYS.radiusAxis]: ["radiusAxis"],
  [CUSTOM_CONFIG_KEYS.grid]: ["grid"],
  [CUSTOM_CONFIG_KEYS.polar]: ["polar"],
  [CUSTOM_CONFIG_KEYS.title]: ["title"],
  [CUSTOM_CONFIG_KEYS.legend]: ["legend"],
  [CUSTOM_CONFIG_KEYS.tooltip]: ["tooltip"],
  [CUSTOM_CONFIG_KEYS.series]: ["series"],
  [CUSTOM_CONFIG_KEYS.colorLegend]: ["colorLegend"],
  [CUSTOM_CONFIG_KEYS.slider]: ["slider"],
  [CUSTOM_CONFIG_KEYS.brush]: ["brush"],
  [CUSTOM_CONFIG_KEYS.facet]: ["facet"],
  [CUSTOM_CONFIG_KEYS.dataMarker]: ["dataMarker"],
  [CUSTOM_CONFIG_KEYS.dataZoom]: ["dataZoom"],
  [CUSTOM_CONFIG_KEYS.calendar]: ["calendar"],
  [CUSTOM_CONFIG_KEYS.plugins]: ["plugins"],
};
// type 为 string 时的枚举，没有就是 input
export const ENUM_LIST_MAP: Record<string, any> = {
  ["xAxis.type"]: AXIS_TYPE_ENUM_LIST,
  ["yAxis.type"]: AXIS_TYPE_ENUM_LIST,
  ["radiusAxis.type"]: AXIS_TYPE_ENUM_LIST,
  ["angleAxis.type"]: AXIS_TYPE_ENUM_LIST,
  ["position"]: TITLE_ALIGN_ENUM_LIST,
  ["rich"]: RICH_ENUM_LIST,
  ["align"]: TITLE_ALIGN_ENUM_LIST,
  ["fontWeight"]: FONT_WEIGHT_ENUM_LIST,
  ["textAlign"]: HORIONTAL_ALIGN_ENUM_LIST,
  ["textBaseline"]: VERTICAL_ALIGN_ENUM_LIST,
  ["pointerEvents"]: POINTER_EVENTS_ENUM_LIST,
  ["lineCap"]: LINE_CAP_ENUM_LIST,
  ["lineJoin"]: LINE_JOIN_ENUM_LIST,
  ["shape"]: SHAPE_ENUM_LIST,
  ["fontVariant"]: FONT_VARIANT_ENUM_LIST,
  ["verticalAlign"]: VERTICAL_ALIGN_ENUM_LIST,
  ["selectedMode"]: SELECTED_MODE_ENUM_LIST,
  ["orient"]: ORIENT_ENUM_LIST,
  ["axis"]: AXIS_ENUM_LIST,
  ["trigger"]: TRIGGER_ENUM_LIST,
  ["triggerOn"]: TRIGGER_ON_ENUM_LIST,
  ["cursor"]: CURSOR_ENUM_LIST,
  ["blendMode"]: BLENDE_MODE_ENUM_LIST,
  ["fontStyle"]: FONT_STYLE_ENUM_LIST,
  ["interactions"]: INTERACTIONS_ENUM_LIST,
  ["dataMarker.points.type"]: DATAMARKER_POINTS_TYPE_ENUM_LIST,
  ["facet.type"]: FACET_TYPE_ENUM_LIST,
  ["colorLegend.type"]: COLOR_LEGEND_TYPE_ENUM_LIST,
  ["dataMarker.symbol"]: MARKER_SYMBOL_ENUM_LIST,
  ["tooltip.crosshairs.type"]: CROSSHAIRS_TYPE_ENUM_LIST,
  ["legend.position"]: LEGEND_POSITION_ENUM_LIST,
  ["legend.title.align"]: HORIONTAL_ALIGN_ENUM_LIST,
  ["title.align"]: HORIONTAL_ALIGN_ENUM_LIST,

  ["series.line.marker.symbol"]: MARKER_SYMBOL_ENUM_LIST,
  ["series.line.smoothMonotone"]: AXIS_ENUM_LIST,
  ["series.line.zoneAxis"]: AXIS_ENUM_LIST,
  ["series.pie.legendIcon.symbol"]: MARKER_SYMBOL_ENUM_LIST,

  ["coord"]: COORD_ENUM_LIST,
  ["symbol"]: MARKER_SYMBOL_ENUM_LIST,

  ["colorLegend.position"]: LEGEND_POSITION_ENUM_LIST,
  ["colorLegend.align"]: COLOR_LEGEND_ALIGN_ENUM_LIST,

  ["series.funnel.align"]: HORIONTAL_ALIGN_ENUM_LIST,

  "series.funnel.label.position": SERIES_LABEL_POSITION,
  "series.line.label.position": SERIES_LABEL_POSITION,
  "series.bar.label.position": SERIES_LABEL_POSITION,
  "series.area.label.position": SERIES_LABEL_POSITION,
  "series.pie.label.position": SERIES_LABEL_POSITION,
  "series.scatter.label.position": SERIES_LABEL_POSITION,
  "series.gauge.label.position": SERIES_LABEL_POSITION,
  "series.wordCloud.label.position": SERIES_LABEL_POSITION,
  "series.treemap.label.position": SERIES_LABEL_POSITION,
  "series.map.label.position": SERIES_LABEL_POSITION,
  "series.demand.label.position": SERIES_LABEL_POSITION,
  "series.liquid.label.position": SERIES_LABEL_POSITION,
  "series.sankey.label.position": SERIES_LABEL_POSITION,
  "series.heatmap.label.position": SERIES_LABEL_POSITION,
  "series.tgi.label.position": SERIES_LABEL_POSITION,
  "series.venn.label.position": SERIES_LABEL_POSITION,
  "series.waterfall.label.position": SERIES_LABEL_POSITION,
  "series.sunburst.label.position": SERIES_LABEL_POSITION,
  "series.wordCloudFast.label.position": SERIES_LABEL_POSITION,
  "series.gantt.label.position": SERIES_LABEL_POSITION,

  "series.funnel.legendType": FUNNEL_LEGEND_TYPE,
};

export const MULTIPLE_CONFIG_MAP: Record<
  string,
  Array<IMultipleInputNumberConfig>
> = {
  ["padding"]: PADDING_MULTIPLE_CONFIG,
};
// type 为 array 时 array item 的类型
export const ARRAY_TYPE_MAP: Record<string, ARRAY_TYPE> = {
  ["color"]: ARRAY_TYPE.Color,
  ["colors"]: ARRAY_TYPE.Color,
  ["padding"]: ARRAY_TYPE.Padding,
  ["lineDash"]: ARRAY_TYPE.Number,
  ["ticks"]: ARRAY_TYPE.Number,
  ["general.colorLegend.text"]: ARRAY_TYPE.String,
  ["polar.center"]: ARRAY_TYPE.String,
  ["legend.pageIconHorizontal"]: ARRAY_TYPE.String,
  ["legend.pageIconVertical"]: ARRAY_TYPE.String,
  ["colorLegend.text"]: ARRAY_TYPE.String,
  ["slider.xAxis"]: ARRAY_TYPE.Number,
  ["slider.yAxis"]: ARRAY_TYPE.Number,
  ["calendar.cellSize"]: ARRAY_TYPE.Number,
  ["calendar.dateRange"]: ARRAY_TYPE.Date,
  ["alternateColor"]: ARRAY_TYPE.Color,
  ["interactions"]: ARRAY_TYPE.Select,
  ["size"]: ARRAY_TYPE.Number,
  ["borderRadius"]: ARRAY_TYPE.BorderRadius,
};

export const TITLE_LABEL_MAP: Record<string, string> = {
  base: "基础",
  xAxis: "x轴",
  yAxis: "y轴",
  radiusAxis: "径向轴",
  angleAxis: "角度轴",
  polar: "极坐标",
  grid: "直角坐标",
  title: "标题",
  legend: "图例",
  tooltip: "提示",
  colorLegend: "颜色图例",
  slider: "缩略轴",
  brush: "刷选",
  facet: "空间划分",
  dataMarker: "数据标记",
  calendar: "日历",
  dataZoom: "数据缩放",
  plugins: "内置插件",
  series: "图表系列",
};

export const FIELD_KEY_MAP: Record<string, LightChartOptionType> = {
  ["facet.customFacet"]: "Function",
};
// 有的字段没给返type，就默认用这个
export const NO_TYPE_KEY_MAP: Record<string, LightChartOptionType> = {
  ["colorLegend.type"]: "string",
  ["facet.type"]: "string",
  ["xAxis.autoRange"]: "boolean",
  ["yAxis.autoRange"]: "boolean",
  ["angleAxis.autoRange"]: "boolean",
  ["radiusAxis.autoRange"]: "boolean",
  ["legend.scrollLineClamp"]: "boolean",
  ["facet.callback"]: "Function",
  ["dataMarker.symbol"]: "string",
  ["tooltip.crosshairs.type"]: "string",
  ["dataMarker.label.position"]: "string",
  ["dataMarker.label.distance"]: "number",
  ["grid.quadrant.labels.bottomRight"]: "string",
  ["calendar.dayLabel.margin"]: "number",
  ["series.line.encode.opacity"]: "number",
  ["calendar.monthLabel.margin"]: "number",
};
// 不渲染的 roadMap
export const UNSHOW_ROADMAP: string[] = [
  "xAxis.markAreas.data",
  "xAxis.markLines.data",
  "yAxis.markAreas.data",
  "yAxis.markLines.data",
  "angleAxis.markAreas.data",
  "angleAxis.markLines.data",
  "radiusAxis.markAreas.data",
  "radiusAxis.markLines.data",
  "series.line.data",
  "series.bar.data",
  "series.area.data",
  "series.pie.data",
  "series.scatter.data",
  "series.gauge.data",
  "series.wordCloud.data",
  "series.treemap.data",
  "series.funnel.data",
  "series.map.data",
  "series.demand.data",
  "series.liquid.data",
  "series.sankey.data",
  "series.heatmap.data",
  "series.tgi.data",
  "series.venn.data",
  "series.waterfall.data",
  "series.sunburst.data",
  "series.wordCloudFast.data",
  "series.gantt.data",
  "series.line.pattern.config",
  "series.bar.pattern.config",
  "series.area.pattern.config",
  "series.pie.pattern.config",
  "series.scatter.pattern.config",
  "series.gauge.pattern.config",
  "series.wordCloud.pattern.config",
  "series.treemap.pattern.config",
  "series.funnel.pattern.config",
  "series.map.pattern.config",
  "series.demand.pattern.config",
  "series.liquid.pattern.config",
  "series.sankey.pattern.config",
  "series.heatmap.pattern.config",
  "series.tgi.pattern.config",
  "series.venn.pattern.config",
  "series.waterfall.pattern.config",
  "series.sunburst.pattern.config",
  "series.wordCloudFast.pattern.config",
  "series.gantt.pattern.config",
];
// Function 类型的 roadmap
export const FUNCTION_ROADMAP: string[] = [
  "tooltip.position",
  "tooltip.valueFormatter",
  "tooltip.nameFormatter",
  "tooltip.titleFormatter",
  "tooltip.customRenderer",
  "tooltip.sort",
  "colorLegend.formatter",
  "dataMarker.label.formatter",
  "series.line.defaultState.selected",
  "series.line.defaultState.visible",
  "series.bar.defaultState.selected",
  "series.bar.defaultState.visible",
  "series.area.defaultState.selected",
  "series.area.defaultState.visible",
  "series.pie.defaultState.selected",
  "series.pie.defaultState.visible",
  "series.scatter.defaultState.selected",
  "series.scatter.defaultState.visible",
  "series.gauge.defaultState.selected",
  "series.gauge.defaultState.visible",
  "series.wordCloud.defaultState.selected",
  "series.wordCloud.defaultState.visible",
  "series.treemap.level.0",
  "series.treemap.defaultState.selected",
  "series.treemap.defaultState.visible",
  "series.funnel.defaultState.selected",
  "series.funnel.defaultState.visible",
  "series.map.defaultState.selected",
  "series.map.defaultState.visible",
  "series.demand.defaultState.selected",
  "series.demand.defaultState.visible",
  "series.liquid.defaultState.selected",
  "series.liquid.defaultState.visible",
  "series.sankey.nodeSort",
  "series.sankey.defaultState.selected",
  "series.sankey.defaultState.visible",
  "series.heatmap.defaultState.selected",
  "series.heatmap.defaultState.visible",
  "series.tgi.defaultState.selected",
  "series.tgi.defaultState.visible",
  "series.venn.defaultState.selected",
  "series.venn.defaultState.visible",
  "series.waterfall.defaultState.selected",
  "series.waterfall.defaultState.visible",
  "series.sunburst.defaultState.selected",
  "series.sunburst.defaultState.visible",
  "series.wordCloudFast.formatter",
  "series.wordCloudFast.defaultState.selected",
  "series.wordCloudFast.defaultState.visible",
  "series.gantt.scales.formatter",
  "series.gantt.nonWorkingTime.isNonWorkingTime",
  "series.gantt.columns.formatter",
  "series.gantt.defaultState.selected",
  "series.gantt.defaultState.visible",
];

export const SERIES_ENUM_LIST = [
  { value: "line", label: "折线图" },
  { value: "bar", label: "柱状图" },
  { value: "area", label: "面积图" },
  { value: "pie", label: "饼图" },
  { value: "scatter", label: "散点图" },
  { value: "gauge", label: "仪表盘" },
  { value: "wordCloud", label: "词云图" },
  { value: "treemap", label: "矩形树图" },
  { value: "funnel", label: "漏斗图" },
  { value: "map", label: "地图" },
  { value: "demand", label: "相关性图" },
  { value: "radar", label: "雷达图" },
  { value: "liquid", label: "水球图" },
  { value: "sankey", label: "桑基图" },
  { value: "heatmap", label: "热力图" },
  { value: "tgi", label: "TGI图" },
  { value: "venn", label: "韦恩图" },
  { value: "waterfall", label: "瀑布图" },
  { value: "sunburst", label: "旭日图" },
  { value: "gantt", label: "甘特图" },
];

// disabled roadmap
export const DISABLED_ROADMAP = [
  "series.line.type",
  "series.bar.type",
  "series.area.type",
  "series.pie.type",
  "series.scatter.type",
  "series.gauge.type",
  "series.wordCloud.type",
  "series.treemap.type",
  "series.funnel.type",
  "series.map.type",
  "series.demand.type",
  "series.liquid.type",
  "series.sankey.type",
  "series.heatmap.type",
  "series.tgi.type",
  "series.venn.type",
  "series.waterfall.type",
  "series.sunburst.type",
  "series.wordCloudFast.type",
  "series.gantt.type",
];
// 写的是 object 但是 array<object> 也支持
export const STUPID_OBJECT_ARRAY_ROADMAP = ["series.funnel.label"];
