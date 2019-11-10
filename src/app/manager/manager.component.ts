import { Component, OnInit } from '@angular/core';
import { ManagerDataService } from "../data.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public ds: ManagerDataService) { }

  ngOnInit() {
  }

  loadData() {
    this.ds.loadOrderList(null)
      .then(() => {
        this.rowData = this.ds.model.orderList.orders;
        console.log(this.rowData)
      })
  }

  stateText(params){
    console.log(params)
    switch(params.value){
      case 1: return "新建"
      case 2: return "已提交"
      //case 2: return "已修改"
      case 3: return "已审核"
      case 4: return "已缴费"
      case 5: return "已完成"
      default: return "";
    }
  }

  title = 'app';
  columnDefs = [
    { headerName: '申请状态', field: 'state', valueFormatter: this.stateText},
    { headerName: '姓名', field: 'xm' },
    { headerName: '学号', field: 'xh' },
    { headerName: '出生日期', field: 'csrq' },
  ]
  rowData = []

  localeText = {
    // for filter panel
    /*page: '页',
    more: '更多',
    to: '到',
    of: '在',
    next: '下一页',
    last: '末页',
    first: '首页',
    previous: '前一页',
    loadingOoo: '加载中...',
 
    // for set filter
    selectAll: 'daSelect Allen',
    searchOoo: 'daSearch...',
    blanks: 'daBlanc',
    */

    // for number filter and text filter
    filterOoo: '筛选...',
    applyFilter: '应用筛选...',
    equals: '等于',
    notEquals: '不等于',
    /*
 
    // for number filter
    lessThan: 'daLessThan',
    greaterThan: 'daGreaterThan',
    lessThanOrEqual: 'daLessThanOrEqual',
    greaterThanOrEqual: 'daGreaterThanOrEqual',
    inRange: 'daInRange',
 
    */
    // for text filter
    contains: '包含',
    notContains: '不包含',
    startsWith: '开始于',
    endsWith: '结束于',



    // filter conditions
    andCondition: '并且',
    orCondition: '或者',
    /*
    // the header of the default group column
    group: 'laGroup',
 
    // tool panel
    columns: 'laColumns',
    filters: 'laFilters',
    rowGroupColumns: 'laPivot Cols',
    rowGroupColumnsEmptyMessage: 'la drag cols to group',
    valueColumns: 'laValue Cols',
    pivotMode: 'laPivot-Mode',
    groups: 'laGroups',
    values: 'laValues',
    pivots: 'laPivots',
    valueColumnsEmptyMessage: 'la drag cols to aggregate',
    pivotColumnsEmptyMessage: 'la drag here to pivot',
    toolPanelButton: 'la tool panel',
 
    // other
    noRowsToShow: 'la no rows',
 
    // enterprise menu
    pinColumn: 'laPin Column',
    valueAggregation: 'laValue Agg',
    autosizeThiscolumn: 'laAutosize Diz',
    autosizeAllColumns: 'laAutsoie em All',
    groupBy: 'laGroup by',
    ungroupBy: 'laUnGroup by',
    resetColumns: 'laReset Those Cols',
    expandAll: 'laOpen-em-up',
    collapseAll: 'laClose-em-up',
    toolPanel: 'laTool Panelo',
    export: 'laExporto',
    csvExport: 'laCSV Exportp',
    excelExport: 'laExcel Exporto (.xlsx)',
    excelXmlExport: 'laExcel Exporto (.xml)',
 
    // enterprise menu (charts)
    pivotChartAndPivotMode: 'laPivot Chart & Pivot Mode',
    pivotChart: 'laPivot Chart',
    chartRange: 'laChart Range',
 
    columnChart: 'laColumn',
    groupedColumn: 'laGrouped',
    stackedColumn: 'laStacked',
    normalizedColumn: 'la100% Stacked',
 
    barChart: 'laBar',
    groupedBar: 'laGrouped',
    stackedBar: 'laStacked',
    normalizedBar: 'la100% Stacked',
 
    pieChart: 'laPie',
    pie: 'laPie',
    doughnut: 'laDoughnut',
 
    line: 'laLine',
 
    xyChart: 'laX Y (Scatter)',
    scatter: 'laScatter',
    bubble: 'laBubble',
 
    areaChart: 'laArea',
    area: 'laArea',
    stackedArea: 'laStacked',
    normalizedArea: 'la100% Stacked',
 
    // enterprise menu pinning
    pinLeft: 'laPin <<',
    pinRight: 'laPin >>',
    noPin: 'laDontPin <>',
 
    // enterprise menu aggregation and status bar
    sum: 'laSum',
    min: 'laMin',
    max: 'laMax',
    none: 'laNone',
    count: 'laCount',
    average: 'laAverage',
    filteredRows: 'laFiltered',
    selectedRows: 'laSelected',
    totalRows: 'laTotal Rows',
    totalAndFilteredRows: 'laRows',
 
    // standard menu
    copy: 'laCopy',
    copyWithHeaders: 'laCopy Wit hHeaders',
    ctrlC: 'ctrl n C',
    paste: 'laPaste',
    ctrlV: 'ctrl n V',
 
    // charts
    pivotChartTitle: 'laPivot Chart',
    rangeChartTitle: 'laRange Chart',
    settings: 'laSettings',
    data: 'laData',
    format: 'laFormat',
    categories: 'laCategories',
    series: 'laSeries',
    axis: 'laAxis',
    color: 'laColor',
    thickness: 'laThickness',
    xRotation: 'laX Rotation',
    yRotation: 'laY Rotation',
    ticks: 'laTicks',
    width: 'laWidth',
    length: 'laLength',
    padding: 'laPadding',
    chart: 'laChart',
    title: 'laTitle',
    font: 'laFont',
    top: 'laTop',
    right: 'laRight',
    bottom: 'laBottom',
    left: 'laLeft',
    labels: 'laLabels',
    size: 'laSize',
    legend: 'laLegend',
    position: 'laPosition',
    markerSize: 'laMarker Size',
    markerStroke: 'laMarker Stroke',
    markerPadding: 'laMarker Padding',
    itemPaddingX: 'laItem Padding X',
    itemPaddingY: 'laItem Padding Y',
    strokeWidth: 'laStroke Width',
    offset: 'laOffset',
    tooltips: 'laTooltips',
    offsets: 'laOffsets',
    callout: 'laCallout',
    markers: 'laMarkers',
    shadow: 'laShadow',
    blur: 'laBlur',
    xOffset: 'laX Offset',
    yOffset: 'laY Offset',
    lineWidth: 'laLine Width',
    normal: 'laNormal',
    bold: 'laBold',
    italic: 'laItalic',
    boldItalic: 'laBold Italic',
    fillOpacity: 'laFill Opacity',
    strokeOpacity: 'laLine Opacity',
    columnGroup: 'Column',
    barGroup: 'Bar',
    pieGroup: 'Pie',
    lineGroup: 'Line',
    scatterGroup: 'Scatter',
    areaGroup: 'Area',
    groupedColumnTooltip: 'laGrouped',
    stackedColumnTooltip: 'laStacked',
    normalizedColumnTooltip: 'la100% Stacked',
    groupedBarTooltip: 'laGrouped',
    stackedBarTooltip: 'laStacked',
    normalizedBarTooltip: 'la100% Stacked',
    pieTooltip: 'laPie',
    doughnutTooltip: 'laDoughnut',
    lineTooltip: 'laLine',
    groupedAreaTooltip: 'laGrouped',
    stackedAreaTooltip: 'laStacked',
    normalizedAreaTooltip: 'la100% Stacked',
    scatterTooltip: 'laScatter',
    bubbleTooltip: 'laBubble',
    noDataToChart: 'laNo data available to be charted.',
    pivotChartRequiresPivotMode: 'laPivot Chart requires Pivot Mode enabled.'*/
  }

}
