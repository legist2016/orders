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

  title = 'app';

  columnDefs = [
    { headerName: '姓名', field: 'xm', sortable: true, filter: true },
    { headerName: '学号', field: 'xh' },
    { headerName: '出生日期', field: 'csrq' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  localeText = {
    // for filter panel
    page: 'daPage',
    more: 'daMore',
    to: 'daTo',
    of: 'daOf',
    next: 'daNexten',
    last: 'daLasten',
    first: 'daFirsten',
    previous: 'daPreviousen',
    loadingOoo: 'daLoading...',

    // for set filter
    selectAll: 'daSelect Allen',
    searchOoo: 'daSearch...',
    blanks: 'daBlanc',

    // for number filter and text filter
    filterOoo: 'daFilter...',
    applyFilter: 'daApplyFilter...',
    equals: 'daEquals',
    notEquals: 'daNotEqual',

    // for number filter
    lessThan: 'daLessThan',
    greaterThan: 'daGreaterThan',
    lessThanOrEqual: 'daLessThanOrEqual',
    greaterThanOrEqual: 'daGreaterThanOrEqual',
    inRange: 'daInRange',

    // for text filter
    contains: 'daContains',
    notContains: 'daNotContains',
    startsWith: 'daStarts dawith',
    endsWith: 'daEnds dawith',

    // filter conditions
    andCondition: 'daAND',
    orCondition: 'daOR',

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
    pivotChartRequiresPivotMode: 'laPivot Chart requires Pivot Mode enabled.'
  }
}
