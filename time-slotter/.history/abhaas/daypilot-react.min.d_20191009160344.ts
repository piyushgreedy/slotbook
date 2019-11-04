type GlobalDate = Date;

export module Abhaas {

    class Scheduler extends SchedulerPropsAndEvents {
        constructor(id: string, options?: SchedulerConfig);
        v: string;
        autoRefreshPause(): void;
        autoRefreshStart(force: boolean): void;
        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        getCoords(): {x: number, y: number, row: Abhaas.Row, cell: Abhaas.Cell, time: Abhaas.Date};
        getDate(pixels: number, precise?: boolean, isEnd?:boolean): Abhaas.Date;
        getScrollX(): number;
        getScrollY(): number;
        getViewPort(): {start: Abhaas.Date, end: Abhaas.Date, resources: string[]};
        hide(): void;
        init(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        scrollTo(date: string | Abhaas.Date): void;
        scrollTo(date: string | Abhaas.Date, animated: boolean | number | "fast" | "normal" | "slow" | "linear", position?: "left" | "middle" | "right"): void;
        scrollToResource(id: string): void;
        selectTimeRange(start: Abhaas.Date, end: Abhaas.Date, resource: string|number, dontFireEvent?:boolean): void;
        setHeight(pixels: number): void;
        setScroll(scrollX: number, scrollY: number): void;
        setScrollX(scrollX: number): void;
        setScrollY(scrollY: number): void;
        show(): void;
        uiBlock(): void;
        uiUnblock(): void;
        update(options?: SchedulerConfig): void;
        visibleStart(): Abhaas.Date;
        visibleEnd(): Abhaas.Date;
        events: {
            list: EventData[];
            add(e: Abhaas.Event): void;
            addByData(data: EventData): void;
            all(): Abhaas.Event[];
            edit(e: Abhaas.Event): void;
            filter(param: any): void;
            find(id: string): Abhaas.Event;
            find(filter: (data: Abhaas.Event) => boolean): Abhaas.Event;
            findRecurrent(masterId: string, time: Abhaas.Date | string): Abhaas.Event;
            focus(e: Abhaas.Event): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(e: Abhaas.Event): void;
            removeById(id: string | number): void;
            removeByData(data: EventData): void;
            update(e: Abhaas.Event): void;
            updateByData(data: EventData): void;
        };
        cells: {
            all(): CellArray;
            findXy(x: number, y: number): CellArray;
            find(start: Abhaas.Date, resource: string): CellArray;
            findByPixels(x: number, y: number): CellArray;
        };
        infinite: {
            scrollTo(date: Abhaas.Date): void;
            shiftStart(days: number): void;
        };
        links:  {
            add(data: LinkData | Abhaas.Link): void;
            find(id: string | number): Abhaas.Link;
            findByFromTo(from: Abhaas.Date | string, to: Abhaas.Date | string): Abhaas.Link;
            remove(data: LinkData | Abhaas.Link): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            );
            list: LinkData[];
        };

        multiselect: {
            add(e: Abhaas.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): Abhaas.Event[];
            isSelected(e: Abhaas.Event): boolean;
            redraw(): void;
            remove(e: Abhaas.Event, dontRedraw?: boolean): void;
            startRectangle(): void;
        };
        range: {
            all(): Abhaas.Selection[];
        };
        rows: {
            all(): Abhaas.Row[];
            collapseAll(): void;
            each(f: () => Abhaas.Row): void;
            edit(row: Abhaas.Row): void;
            expand(level?: number): void;
            expandAll(): void;
            filter(param: any): void;
            find(id: string, start?: Abhaas.Date | string): Abhaas.Row;
            headerHide(): void;
            headerShow(): void;
            headerToggle(): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(row: Abhaas.Row): void;
            visible(): Abhaas.Row[];

            selection: {
                add(row: Abhaas.Row): void;
                clear(): void;
                get(): Abhaas.Row[];
                isSelected(row: Abhaas.Row): boolean;
                remove(row: Row): void;
            };

        };
        zoom: {
            setActive(index: number, position?: "left" | "middle" | "right"): void;
            active: number;
        };
    }

    class SchedulerPropsAndEvents {
        allowDefaultContextMenu?: boolean;
        allowEventOverlap?: boolean;
        allowMultiMove?: boolean;
        allowMultiRange?: boolean;
        allowMultiResize?: boolean;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        backendUrl?: string;
        beforeCellRenderCaching?: boolean;
        blockOnCallBack?: boolean;
        bubble?: Abhaas.Bubble | string;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        businessWeekends?: boolean;
        cellBubble?: Abhaas.Bubble | string;
        cellDuration?: number;
        cellGroupBy?: GroupBy;
        cellSweeping?: boolean;
        cellSweepingCacheSize?: number;
        cellWidth?: number;
        cellWidthMin?: number;
        cellWidthSpec?: "Auto" | "Fixed";
        cellsMarkBusiness?: boolean;
        clientState?: any;
        contextMenu?: Abhaas.Menu | string;
        contextMenuResource?: Abhaas.Menu | string;
        contextMenuSelection?: Abhaas.Menu | string;
        cornerHtml?: string;
        crosshairTimeHeaderLevel?: "Last" | number;
        crosshairType?: "Full" | "Header" | "Disabled";
        days?: number;
        doubleClickTimeout?: number;
        dragOutAllowed?: boolean;
        drawBlankCells?: boolean;
        durationBarHeight?: number;
        durationBarMode?: "Duration" | "PercentComplete";
        durationBarVisible?: boolean;
        dynamicEventRendering?: boolean;
        dynamicEventRenderingCacheSize?: number;
        dynamicEventRenderingCacheSweeping?: boolean;
        dynamicEventRenderingMargin?: number;
        dynamicEventRenderingMarginX?: number;
        dynamicEventRenderingMarginY?: number;
        dynamicLoading?: boolean;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventEditHandling?: "Disabled" | "Update" | "CallBack";
        eventEditMinWidth?: number;
        eventEndSpec?: "DateTime" | "Date";
        eventHeight?: number;
        eventHoverHandling?: "Bubble" | "Disabled";
        eventHtmlLeftMargin?: number;
        eventHtmlRightMargin?: number;
        eventMarginBottom?: number;
        eventMarginLeft?: number;
        eventMarginRight?: number;
        eventMinWidth?: number;
        eventMoveHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventMoveMargin?: number;
        eventMoveSkipNonBusiness?: boolean;
        eventMoveToPosition?: boolean;
        eventMovingStartEndEnabled?: boolean;
        eventMovingStartEndFormat?: boolean;
        eventResizeHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventResizeMargin?: number;
        eventResizingStartEndEnabled?: boolean;
        eventResizingStartEndFormat?: boolean;
        eventRightClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventSelectHandling?: "Disabled" | "Update" | "CallBack";
        eventStackingLineHeight?: number;
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        eventTextWrappingEnabled?: boolean;
        eventUpdateInplaceOptimization?: boolean;
        eventVersionHeight?: number;
        eventVersionMargin?: number;
        eventVersionPosition?: "Above" | "Below";
        eventVersionsEnabled?: boolean;
        eventsLoadMethod?: "GET" | "POST";
        floatingEvents?: boolean;
        floatingTimeHeaders?: boolean;
        groupConcurrentEvents?: boolean;
        groupConcurrentEventsLimit?: number;
        headerHeight?: number;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct" | "Max100Pct";
        hideBorderFor100PctHeight?: boolean;
        hideUntilInit?: boolean;
        infiniteScrollingEnabled?: boolean;
        infiniteScrollingMargin?: number;
        infiniteScrollingStepDays?: number;
        initEventEnabled?: boolean;
        jointEventsMove?: boolean;
        jointEventsResize?: boolean;
        layout?: "DivBased" | "TableBased";
        linkBottomMargin?: number;
        linkCreateHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        linkPointSize?: number;
        linksLoadMethod?: "GET" | "POST";
        loadingLabelText?: string;
        loadingLabelVisible?: boolean;
        locale?: string | Abhaas.Locale;
        messageBarPosition?: "Top" | "Bottom";
        messageHideAfter?: number;
        messageHideOnMouseOut?: boolean;
        moveBy?: "Full" | "Top" | "Left";
        multiMoveVerticalMode?: "Disabled" | "Master" | "All";
        multiSelectRectangle?: "Disabled" | "Free" | "Row";
        navigatorBackSync?: string | Abhaas.Navigator;
        notifyCommit?: "Immediate" | "Queue";
        overrideWheelScrolling?: boolean;
        progressiveRowRendering?: boolean;
        progressiveRowRenderingPreload?: number;
        resourceBubble?: Abhaas.Bubble;
        resourceCollapseHandling?: "Enabled" | "CallBack";
        resourceExpandHandling?: "Enabled" | "CallBack";
        resources?: ResourceData[];
        rowClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select";
        rowCreateHandling?: "Disabled" | "Enabled" | "CallBack";
        rowCreateHeight?: number;
        rowCreateHtml?: string;
        rowDoubleClickHandling?: "Disabled" | "Enabled" | "CallBack" | "Select" | "Edit";
        rowEditHandling?: "Update" | "CallBack";
        rowHeaderColumnDefaultWidth?: number;
        rowHeaderColumnResizedHandling?: "Update" | "CallBack";
        rowHeaderColumns?: { title: string, width?: number}[];
        rowHeaderHideIconEnabled?: boolean;
        rowHeaderScrolling?: boolean;
        rowHeaderSplitterWidth?: number;
        rowHeaderWidth?: number;
        rowHeaderWidthAutoFit?: boolean;
        rowHeaderWidthMarginRight?: number;
        rowMarginBottom?: number;
        rowMarginTop?: number;
        rowMinHeight?: number;
        rowMoveHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        rowRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        rowSelectHandling?: "Update" | "CallBack" | "Notify";
        rowsLoadMethod?: "GET" | "POST";
        scale?: "Manual" | "CellDuration" | "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year";
        scrollDelayCells?: number;
        scrollDelayDynamic?: number;
        scrollDelayEvents?: number;
        scrollDelayFloats?: number;
        scrollStep?: number;
        scrollX?: number;
        scrollY?: number;
        selectedRows?: string[] | number[];
        separators?: SeparatorData[];
        showNonBusiness?: boolean;
        showToolTip?: boolean;
        snapToGrid?: boolean;
        snapToGridEventResizing?: boolean;
        snapToGridEventMoving?: boolean;
        snapToGridTimeRangeSelecting?: boolean;
        sortDirections?: SortDirection[];
        startDate?: Abhaas.Date | string;
        syncResourceTree?: boolean;
        tapAndHoldTimeout?: number;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderClickHandling?: "Enabled" | "Disabled";
        timeHeaderTextWrappingEnabled?: boolean;
        timeHeaders?: TimeHeaderData[];
        timeRangeClickHandling?: "Enabled" | "Disabled";
        timeRangeDoubleClickHandling?: "Disabled" | "CallBack" | "Enabled";
        timeRangeRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectingStartEndEnabled?: boolean;
        timeRangeSelectingStartEndFormat?: string;
        timeline?: TimelineData[];
        treeAnimation?: boolean;
        treeAutoExpand?: boolean;
        treeEnabled?: boolean;
        treeImageMarginLeft?: number;
        treeImageMarginTop?: number;
        treeImageWidth?: number;
        treeImageHeight?: number;
        treeIndent?: number;
        treePreventParentUsage?: boolean;
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Days" | "Resources" | "Gantt";
        visible?: boolean;
        watchWidthChanges?: boolean;
        weekStarts?: "Auto" | number;
        width?: number;
        zoomLevels?: ZoomLevel[];
        zoomPosition?: "left" | "right" | "middle";

        onAfterEventRender?: EventHandler;
        onAfterRender?: EventHandler;
        onAfterUpdate?: EventHandler;
        onAutoRefresh?: EventHandler;
        onBeforeCellExport?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeEventExport?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onBeforeGroupRender?: EventHandler;
        onBeforeResHeaderRender?: EventHandler;
        onBeforeRowHeaderRender?: EventHandler;
        onBeforeRowHeaderExport?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onBeforeTimeHeaderExport?: EventHandler;
        onCallBackStart?: EventHandler;
        onCallBackEnd?: EventHandler;
        onCellMouseOut?: EventHandler;
        onCellMouseOver?: EventHandler;
        onDimensionsChanged?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDelete?: EventHandler;
        onEventDeleted?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventEdit?: EventHandler;
        onEventEdited?: EventHandler;
        onEventFilter?: EventHandler;
        onEventMouseOut?: EventHandler;
        onEventMouseOver?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventMoving?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onEventResizing?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onGridMouseDown?: EventHandler;
        onIncludeTimeCell?: EventHandler;
        onLoadNode?: EventHandler;
        onRectangleEventSelect?: EventHandler;
        onRectangleEventSelected?: EventHandler;
        onRectangleEventSelecting?: EventHandler;
        onResourceCollapse?: EventHandler;
        onResourceExpand?: EventHandler;
        onResourceHeaderClick?: EventHandler;
        onResourceHeaderClicked?: EventHandler;
        onRowClick?: EventHandler;
        onRowClicked?: EventHandler;
        onRowCreate?: EventHandler;
        onRowCreated?: EventHandler;
        onRowDoubleClick?: EventHandler;
        onRowDoubleClicked?: EventHandler;
        onRowEdit?: EventHandler;
        onRowEdited?: EventHandler;
        onRowFilter?: EventHandler;
        onRowHeaderColumnResized?: EventHandler;
        onRowMouseOver?: EventHandler;
        onRowMouseOut?: EventHandler;
        onRowMove?: EventHandler;
        onRowMoved?: EventHandler;
        onRowMoving?: EventHandler;
        onRowSelect?: EventHandler;
        onRowSelected?: EventHandler;
        onScroll?: EventHandler;
        onTimeHeaderClick?: EventHandler;
        onTimeHeaderClicked?: EventHandler;
        onTimeRangeClick?: EventHandler;
        onTimeRangeClicked?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
        onTimeRangeRightClick?: EventHandler;
        onTimeRangeRightClicked?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onTimeRangeSelecting?: EventHandler;
    }

    class SchedulerConfig extends SchedulerPropsAndEvents {
        events?: EventData[];
        links?: LinkData[];
        zoom?: number;
    }

    namespace Scheduler {
        function makeDraggable(options: any): void;
        function startDragging(options: any): void;
        function stopDragging(): void;
    }

    class Calendar extends CalendarPropsAndEvents {
        constructor(id: string, options?: CalendarConfig);
        v: string;
        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        getSelection(): Abhaas.Selection;
        hide(): void;
        init(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: CalendarConfig): void;
        visibleStart(): Abhaas.Date;
        visibleEnd(): Abhaas.Date;
        columns: {
            list: CalendarColumnData[];
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            filter(param: any): void;
        };
        events: {
            list: EventData[];
            add(e: Abhaas.Event): void;
            find(id: string): Abhaas.Event;
            findRecurrent(masterId: string, time: Abhaas.Date | string): Abhaas.Event;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(e: Abhaas.Event): void;
            update(e: Abhaas.Event): void;
        };
        multiselect: {
            add(e: Abhaas.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): Abhaas.Event[];
            redraw(): void;
            remove(e: Abhaas.Event, dontRedraw?: boolean): void;
        };
    }

    class CalendarPropsAndEvents {
        allDayEnd?: "DateTime" | "Date";
        allDayEventHeight?: number;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        backendUrl?: string;
        bubble?: Abhaas.Bubble | string;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        cellDuration?: number;
        cellHeight?: number;
        clientState?: any;
        columnBubble?: Abhaas.Bubble | string;
        columnMarginRight?: number;
        columnsLoadMethod?: "POST" | "GET";
        contextMenu?: Abhaas.Menu | string;
        contextMenuSelection?: Abhaas.Menu | string;
        cornerHtml?: string;
        crosshairColor?: string;
        crosshairOpacity?: number;
        crosshairType?: "Header" | "Full";
        dayBeginsHour?: number;
        dayEndsHour?: number;
        days?: number;
        doubleClickTimeout?: number;
        durationBarVisible?: boolean;
        durationBarWidth?: number;
        eventArrangement?: "SideBySide" | "Cascade" | "Full";
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "Bubble";
        eventEditHandling?: "Update" | "CallBack";
        eventHoverHandling?: "Bubble" | "Disabled";
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        headerClickHandling?: "Enabled" | "CallBack";
        headerDateFormat?: string;
        headerHeight?: number;
        headerLevels?: number;
        height?: number;
        heightSpec?: "BusinessHours" | "BusinessHoursNoScroll" | "Fixed" | "Auto";
        hideFreeCells?: boolean;
        hideUntilInit?: boolean;
        hourWidth?: number;
        initScrollPos?: number;
        loadingLabelText?: string;
        loadingLabelVisible?: boolean;
        locale?: string;
        messageHideAfter?: number;
        moveBy?: "Full" | "Left" | "Top" | "Disabled" | "None";
        notifyCommit?: "Immediate" | "Queue";
        rtl?: boolean;
        showAllDayEvents?: boolean;
        showAllDayEventStartEnd?: boolean;
        showCurrentTime?: boolean;
        showCurrentTimeMode?: "Day" | "Full";
        showCurrentTimeOffset?: number;
        showHeader?: boolean;
        showHours?: boolean;
        showToolTip?: boolean;
        sortDirections?: SortDirection[];
        startDate?: Abhaas.Date | string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderCellDuration?: number;
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Days" | "Resources";
        width?: string;

        onAfterRender?: EventHandler;
        onAfterEventRender?: EventHandler;
        onAjaxError?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeHeaderRender?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventEdit?: EventHandler;
        onEventEdited?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventDelete?: EventHandler;
        onEventDeleted?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onHeaderClick?: EventHandler;
        onHeaderClicked?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
        onColumnFilter?: EventHandler;
    }

    class CalendarConfig extends CalendarPropsAndEvents {
        events?: EventData[];
        columns?: CalendarColumnData[];
    }

    class Month extends MonthPropsAndEvents {
        constructor(id: string, options?: MonthConfig);

        v: string;

        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        hide(): void;
        init(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: MonthConfig): void;
        visibleStart(): Abhaas.Date;
        visibleEnd(): Abhaas.Date;

        events : {
            list: EventData[];
            add(e: Abhaas.Event): void;
            find(id: string): Abhaas.Event;
            findRecurrent(masterId: string, time: Abhaas.Date | string): Abhaas.Event;
            forRange(start: Abhaas.Date | string, end: Abhaas.Date | string): Abhaas.Event[];
            remove(e: Abhaas.Event): void;
            update(e: Abhaas.Event): void;
        };

        multiselect: {
            add(e: Abhaas.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): Abhaas.Event[];
            redraw(): void;
            remove(e: Abhaas.Event): void;
        };

    }

    class MonthPropsAndEvents {
        allowMultiSelect?: boolean;
        autoRefreshEnabled?: boolean;
        autoRefreshCommand?: string;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        backendUrl?: string;
        bubble?: Abhaas.Bubble | string;
        cellHeaderHeight?: number;
        cellHeight?: number;
        cellMarginBottom?: number;
        cellMode?: boolean;
        clientState?: any;
        contextMenu?: Abhaas.Menu | string;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "ContextMenu" | "Bubble";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "Bubble";
        eventEndTime?: boolean;
        eventHeight?: number;
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventMoveToPosition?: boolean;
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventStartTime?: boolean;
        headerClickHandling?: "Enabled" | "Disabled" | "CallBack";
        headerHeight?: number;
        hideUntilInit?: boolean;
        lineSpace?: number;
        locale?: string;
        messageHideAfter?: number;
        notifyCommit?: "Immediate" | "Queue";
        showWeekend?: boolean;
        showToolTip?: boolean;
        startDate?: Abhaas.Date | string;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        viewType?: "Month" | "Weeks";
        weekStarts?: "Auto" | number;
        weeks?: number;
        width?: string;

        onAjaxError?: EventHandler;
        onAfterEventRender?: EventHandler;
        onAfterRender?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onBeforeHeaderRender?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onHeaderClick?: EventHandler;
        onHeaderClicked?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
    }

    class MonthConfig extends MonthPropsAndEvents {
        events?: EventData;
    }

    class Kanban extends KanbanPropsAndEvents {
        constructor(id: string, options?: KanbanConfig);

        v: string;

        hide(): void;
        init(): void;
        dispose(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: KanbanConfig): void;

        cards: {
            list: CardData[];
            add(c: Abhaas.Card): void;
            remove(c: Abhaas.Card): void;
            update(c: Abhaas.Card): void;
        };
        columns: {
            list: KanbanColumnData[];
        };
        swimlanes : {
            list: SwimlaneData[];
        };

    }

    class KanbanPropsAndEvents {
        barWidth?: number;
        cardDeleteHandling?: "Disabled" | "Update";
        cardMarginBottom?: number;
        cardMarginLeft?: number;
        cardMarginRight?: number;
        cardMoveHandling?: "Update" | "Disabled";
        cellMarginBottom?: number;
        cellMarginTop?: number;
        columnHeaderHeight?: number;
        columnMoveHandling?: "Disabled" | "Update";
        crosshairColor?: string;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct";
        rowMinHeight?: number;
        swimlaneCollapsingEnabled?: boolean;
        swimlaneHeaderWidth?: number;
        swimlaneMoveHandling?: "Disabled" | "Update";
        theme?: string;
        visible?: boolean;

        onCardClick?: EventHandler;
        onCardClicked?: EventHandler;
        onCardDelete?: EventHandler;
        onCardDeleted?: EventHandler;
        onCardMove?: EventHandler;
        onCardMoved?: EventHandler;
        onColumnMove?: EventHandler;
        onColumnMoved?: EventHandler;
        onHeightChanged?: EventHandler;
        onSwimlaneMove?: EventHandler;
        onSwimlaneMoved?: EventHandler;
    }

    class KanbanConfig extends KanbanPropsAndEvents {
        cards?: CardData[];
        columns?: KanbanColumnData[];
        swimlanes?: SwimlaneData[];
    }


    class Gantt extends GanttPropsAndEvents {
        constructor(id: string, options?: GanttConfig);

        v: string;

        commandCallBack(command: string, data?: any): void;
        init(): void;
        dispose(): void;
        message(html: string): void;
        scrollTo(date: Abhaas.Date, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        scrollTo(date: string, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        scrollTo(pixels: number, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        setHeight(pixels: number): void;
        update(options?: GanttConfig): void;

        links: {
            list: LinkData[];
            add(link: Abhaas.Link): void;
            find(id: string): Abhaas.Link;
            findByFromTo(from: Abhaas.Date | string, to: Abhaas.Date | string): Abhaas.Link;
            remove(link: Abhaas.Link): void;
        };
        rows: {
            selection: {
                add(task: Abhaas.Task): void;
                clear(): void;
                get(): Abhaas.Task[];
            };
        };
        tasks: {
            list: TaskData[];
            add(task: Abhaas.Task): void;
            find(id: string): Abhaas.Task;
            remove(task: Abhaas.Task): void;
            update(task: Abhaas.Task): void;
        };

    }

    class GanttPropsAndEvents {
        startDate?: Abhaas.Date | string;
        days?: number;

        onAfterRender?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeRowHeaderRender?: EventHandler;
        onBeforeTaskRender?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onColumnResized?: EventHandler;
        onLinkCreate?: EventHandler;
        onLinkCreated?: EventHandler;
        onRowClick?: EventHandler;
        onRowClicked?: EventHandler;
        onRowDoubleClick?: EventHandler;
        onRowDoubleClicked?: EventHandler;
        onRowEdit?: EventHandler;
        onRowEdited?: EventHandler;
        onRowMove?: EventHandler;
        onRowMoved?: EventHandler;
        onRowMoving?: EventHandler;
        onRowSelect?: EventHandler;
        onRowSelected?: EventHandler;
        onTaskClick?: EventHandler;
        onTaskClicked?: EventHandler;
        onTaskDoubleClick?: EventHandler;
        onTaskDoubleClicked?: EventHandler;
        onTaskMove?: EventHandler;
        onTaskMoved?: EventHandler;
        onTaskMoving?: EventHandler;
        onTaskResize?: EventHandler;
        onTaskResized?: EventHandler;
        onTaskResizing?: EventHandler;
        onTaskRightClick?: EventHandler;
        onTaskRightClicked?: EventHandler;
    }

    class GanttConfig {
        tasks?: TaskData[];
        links?: LinkData[];
    }

    class Navigator extends NavigatorPropsAndEvents {
        constructor(id: string, options?: NavigatorConfig);

        v: string;

        init(): void;
        dispose(): void;
        update(options?: NavigatorConfig): void;
        select(date: Abhaas.Date | string): void;
        hide(): void;
        show(): void;
        visibleEnd(): Abhaas.Date;
        visibleStart(): Abhaas.Date;

        events: {
            list: EventDataShort[];
        };
    }

    class NavigatorPropsAndEvents {
        bound: string;
        cellHeight: number;
        cellWidth: number;
        command: string;
        dayHeaderHeight: number;
        locale: string;
        orientation: "Vertical" | "Horizontal";
        rowsPerMonth: "Auto" | "Six";
        selectionDay: Abhaas.Date;
        selectionEnd: Abhaas.Date;
        selectionStart: Abhaas.Date;
        selectMode: "day" | "week" | "month" | "none";
        showMonths: number;
        showWeekNumbers: boolean;
        skipMonths: number;
        startDate: Abhaas.Date | string;
        theme: string;
        titleHeight: number;
        weekStarts: "Auto" | number;
        weekNumberAlgorithm: "Auto" | "US" | "ISO8601";
        timeRangeSelectedHandling: "Bind" | "None";
        visibleRangeChangedHandling: "Enabled" | "Disabled" | "CallBack";

        onAjaxError: EventHandler;
        onBeforeCellRender: EventHandler;
        onTimeRangeSelect: EventHandler;
        onTimeRangeSelected: EventHandler;
        onVisibleRangeChange: EventHandler;
        onVisibleRangeChanged: EventHandler;
    }

    class NavigatorConfig extends NavigatorPropsAndEvents {
        events?: EventData[];
    }

    class Bubble {
        constructor(options?: any);

        v: string;

        onLoad: EventHandler;

        showEvent(e: Abhaas.Event): void;
        showHtml(html: string, div?: HTMLElement): void;

        animated: boolean;
        animation: "fast" | "slow" | "jump";
        hideAfter: number;
        loadingText: number;
        position: "EventTop" | "Mouse";
        showAfter: number;
        showLoadingLabel: boolean;
        theme: string;
        zIndex: number;
    }

    namespace Bubble {
        function hide(): void;
    }

    class Locale {
        constructor(id: string, properties: {
            dayNames: string[];
            dayNamesShort: string[];
            monthNames: string[];
            monthNamesShort: string[];
            timePattern: string;
            datePattern: string;
            dateTimePattern: string;
            timeFormat: "Clock12Hours" | "Clock24Hours";
            weekStarts: number;
        });

        datePattern: string;
        dateTimePattern: string;
        dayNames: string[];
        dayNamesShort: string[];
        monthNames: string[];
        monthNamesShort: string[];
        timeFormat: "Clock12Hours" | "Clock24Hours";
        timePattern: string;
        weekStarts: number;
    }

    namespace Locale {
        function register(locale: Abhaas.Locale): void;
    }

    class Menu {
        constructor(options?: {
            hideOnMouseOut?: boolean;
            items?: MenuItemData[];
            menuTitle?: string;
            onShow?: EventHandler;
            showMenuTitle?: boolean;
            zIndex?: number;
            theme?: string;
        });

        v: string;

        //className: string;
        hideOnMouseOut: boolean;
        items: MenuItemData[];
        menuTitle: string;
        showMenuTitle: boolean;
        zIndex: number;
        theme: string;

        show(target?: any): void;
    }

    class MenuBar {
        constructor(id: string, options?: any);
        items: any[];
        init(): void;
    }

    class Date {
        constructor(str?: string | Abhaas.Date);
        constructor(date: GlobalDate, isLocal?: boolean);

        addDays(days: number): Abhaas.Date;
        addHours(hours: number): Abhaas.Date;
        addMilliseconds(millis: number): Abhaas.Date;
        addMinutes(minutes: number): Abhaas.Date;
        addMonths(months: number): Abhaas.Date;
        addSeconds(seconds: number): Abhaas.Date;
        addTime(ticks: number): Abhaas.Date;
        addTime(duration: Abhaas.Duration): Abhaas.Date;
        addYears(years: number): Abhaas.Date;
        dayOfWeek(): number;
        dayOfYear(): number;
        daysInMonth(): number;
        daysInYear(): number;
        equals(another: Abhaas.Date): boolean;
        firstDayOfMonth(): Abhaas.Date;
        firstDayOfWeek(): Abhaas.Date;
        firstDayOfYear(): Abhaas.Date;
        getDatePart(): Abhaas.Date;
        getDay(): number;
        getDayOfWeek(): number;
        getYear(): number;
        getHours(): number;
        getMilliseconds(): number;
        getMinutes(): number;
        getMonth(): number;
        getSeconds(): number;
        getTime(): number;
        getTimePart(): number;
        getTotalTicks(): number;
        getYear(): number;
        lastDayOfMonth(): Abhaas.Date;
        toDate(): GlobalDate;
        toDateLocal(): GlobalDate;
        toString(pattern?: string, locale?: string | Abhaas.Locale): string;
        toStringSortable(): string;
        weekNumber(): number;
        weekNumberISO(): number;
    }

    namespace Date {
        function today(): Abhaas.Date;
        function fromYearMonthDay(year: number, month: number, day: number): Abhaas.Date;
        function parse(input: string, pattern: string, locale?: string | Abhaas.Locale): Abhaas.Date;
        function today(): Abhaas.Date;
        namespace Cache {
            function clear(): void;
        }
    }

    namespace Util {
        function overlaps(start1: Abhaas.Date, end1: Abhaas.Date, start2: Abhaas.Date, end2: Abhaas.Date);
        function overlaps(start1: number, end1: number, start2: number, end2: number);
    }

    namespace Modal {
        function prompt(message: string, defaultValue?: string, options?: any) : Promise;
        function alert(message: string, options?: any) : Promise;
        function confirm(message: string, options?: any) : Promise;
    }

    class Promise {
        constructor(f: (onFulfilled: (...args: any[]) => void, onRejected?: (...args: any[]) => void) => void);
        then(onFulfilled: (...args: any[]) => void, onRejected?: (...args: any[]) => void): Promise;
        catch(onRejected: (...args: any[]) => void): Promise;
    }

    class Duration {

        constructor(ticks: number);
        constructor(start: Abhaas.Date, end: Abhaas.Date);

        ticks: number;
        toString(pattern?:string): string;

        totalSeconds(): number;
        totalMinutes(): number;
        totalHours(): number;
        totalDays(): number;

        milliseconds(): number;
        seconds(): number;
        minutes(): number;
        hours(): number;
        days(): number;
    }

    namespace Duration {
        function weeks(i: number): Abhaas.Duration;
        function days(i: number): Abhaas.Duration;
        function hours(i: number): Abhaas.Duration;
        function minutes(i: number): Abhaas.Duration;
        function seconds(i: number): Abhaas.Duration;
    }

    class Event {
        constructor(data: EventData);
        data: any;

        start(): Abhaas.Date;
        start(newStart: Abhaas.Date): void;

        end(): Abhaas.Date;
        end(newEnd: Abhaas.Date): void;

        id(): string;

        text(): string;
        text(newText: string): void;

        resource(): string;
        resource(newResource: string): void;

        duration(): Abhaas.Duration;
    }

    class Task {
        constructor(data: TaskData);

        data: TaskData;

        id(): string | number;
        id(newId: string): void;

        text(): string;
        text(newText: string): void;

        start(): Abhaas.Date;
        start(newStart: Abhaas.Date | string): void;

        end(): Abhaas.Date;
        end(newEnd: Abhaas.Date | string): void;

        complete(): number;
        complete(newComplete: number): void;

        type(): TaskType;
        type(newType: TaskType): void;

        children(): Abhaas.Task[];

        row: {
            expand(): void;
            expanded(): boolean;
            collapse(): void;
            toggle(): void;
        }
    }

    class Card {
        constructor(data: CardData);
        data: CardData;
    }

    class Link {
        constructor(data: LinkData);
        data: LinkData;
    }

    class Row {
        addClass(className: string): void;
        children(): Abhaas.Row[];
        parent(): Abhaas.Row;
        remove(): void;
        collapse(): void;
        column(i: number): RowHeaderColumn;
        expand(): void;
        removeClass(className: string): void;
        toggle(): void;
        events: {
            all(): Abhaas.Event[];
            isEmpty(): boolean;
            forRange(start: string | Abhaas.Date, end: string | Abhaas.Date): Abhaas.Event[];
            totalDuration(): Abhaas.Duration;
        };
        cells: {
            all(): CellArray;
            forRange(start: string | Abhaas.Date, end: string | Abhaas.Date): CellArray;
            totalDuration(): Abhaas.Duration;
        };
        groups: {
            all(): EventGroup[];
            collapseAll(): void;
            collapsed(): EventGroup[];
            expandAll(): void;
            expanded(): EventGroup[];
        };

        id: string;
        name: string;
        start: Abhaas.Date;
        data: any;
    }

    class Selection {
        start: Abhaas.Date;
        end: Abhaas.Date;
        resource: string;
    }

    class Export {
        toElement(): HTMLElement;
        toHtml(): string;
        toDataUri(): string;
        toBlob(): Blob;
        print(options?: any): void;
        download(filename?: string): void;
        dimensions(): { width: number, height: number };
    }

    interface CardData {
        id: string | number;
        name: string;
        text?: string;
        html?: string;
        column: string | number;
        swimlane?: string | number;
        barColor?: string;
    }

    interface KanbanColumnData {
        id: string | number;
        name: string;
        barColor?: string;
    }

    interface SwimlaneData {
        id: string | number;
        name: string;
        collapsed?: boolean;
    }

    interface RowHeaderColumn {
        html(newHtml?: string): string | void;
    }

    interface EventGroup {
        expand(): void;
        collapse(): void;
    }

    interface CalendarColumnData {
        name: string;
        id?: string;
        start?: Abhaas.Date | string;
        html?: string;
        toolTip?: string;
        children?: CalendarColumnData[];
    }

    type GroupBy = "Hour" | "Day" | "Week" | "Month"  | "Quarter" | "Year" | "Cell" | "None";
    type SortDirection = "asc" | "desc";
    type TaskType = "Task" | "Milestone" | "Group";
    type LinkType = "FinishToStart" | "FinishToFinish" | "StartToStart" | "StartToFinish";

    interface ZoomLevel {
        properties: any;
    }

    interface TimelineData {
        start: Abhaas.Date | string;
        end: Abhaas.Date | string;
        width?: number;
    }

    interface TimeHeaderData {
        groupBy: GroupBy;
        format?: string;
    }

    interface MenuItemData {
        text: string;
        href?: string;
        onClick?: EventHandler;
        command?: string;
        action?: "CallBack" | "PostBack";
        disabled?: boolean;
        image?: string;
        cssClass?: string;
        icon?: string;
        tags?: any;
        items?: MenuItemData[];
    }

    interface EventHandler {
        (args?: any): void;
    }

    interface SeparatorData {
        location: Abhaas.Date | string;
        color?: string;
        layer?: "AboveEvents" | "BelowEvents";
        opacity?: number;
        width?: number;
        cssClass?: string;
    }

    interface CellArray extends Array<Cell> {
        addClass(className: string): CellArray;
        removeClass(className: string): CellArray;
        html(html: string): CellArray;
        invalidate(): CellArray;
    }

    interface Cell {
        start: Abhaas.Date;
        end: Abhaas.Date;
        resource: string;
        isParent: boolean;
        update(): void;
        utilization(name?: string): number;
        events(): Abhaas.Event[];
        div: HTMLElement;
        properties: any;
    }

    interface EventDataShort {
        start: string | Abhaas.Date;
        end: string | Abhaas.Date;
    }

    interface EventData {
        start: string | Abhaas.Date;
        end: string | Abhaas.Date;
        id: string | number;
        text: string;
        resource?: string | number;

        areas?: AreaData[];
        backColor?: string;
        backImage?: string;
        backRepeat?: string;
        borderColor?: string;
        bubbleHtml?: string;
        clickDisabled?: boolean;
        contextMenu?: Abhaas.Menu | string;
        cssClass?: string;
        deleteDisabled?: boolean;
        doubleClickDisabled?: boolean;
        fontColor?: string;
        hidden?: boolean;
        html?: string;
        moveDisabled?: boolean;
        recurrent?: boolean;
        recurrentMasterId?: boolean;
        resizeDisabled?: boolean;
        rightClickDisabled?: boolean;
        sort?: string[];
        tags?: any;
        toolTip?: string;

        // scheduler
        barBackColor?: string;
        barColor?: string;
        barHidden?: boolean;
        complete?: number;
        height?: number;
        moveVDisabled?: boolean;
        moveHDisabled?: boolean;
    }

    interface LinkData {
        from: string;
        to: string;
        id?: string;
        type?: LinkType;
        width?: number;
        color?: string;
        style?: string;
        cssClass?: string;
        layer?: "Above" | "Below";
    }

    interface TaskData {
        id: string;
        text: string;
        start: Abhaas.Date | string;
        end?: Abhaas.Date | string;
        type?: TaskType;
        complete?: number;
        children?: TaskData[];
        tags?: any;

        box?: {
            areas?: AreaData[];
            backColor?: string;
            backImage?: string;
            backRepeat?: string;
            barBackColor?: string;
            barColor?: string;
            barHidden?: boolean;
            bubbleHtml?: string;
            clickDisabled?: boolean;
            contextMenu?: Abhaas.Menu | string;
            cssClass?: string;
            doubleClickDisabled?: boolean;
            html?: string;
            htmlLeft?: string;
            htmlRight?: string;
            moveDisabled?: boolean;
            resizeDisabled?: boolean;
            rightClickDisabled?: boolean;
            toolTip?: string;
        };

        row?: {
            html?: string;
            hidden?: boolean;
            areas?: AreaData[];
            toolTip?: string;
            backColor?: string;
            cssClass?: string;
            contextMenu?: Abhaas.Menu | string;
            collapsed?: boolean;
            marginBottom?: number;
            minHeight?: number;

        };
    }

    interface ResourceData {
        name: string;
        id: string | number;

        areas?: AreaData[];
        backColor?: string;
        bubbleHtml?: string;
        fontColor?: string;
        cellsDisabled?: boolean;
        children?: ResourceData[];
        columns?: {html?: string; cssClass?: string; backColor?: string}[];
        cssClass?: string;
        contextMenu?: Menu | string;
        dynamicChildren?: boolean;
        eventHeight?: number;
        eventStackingLineHeight?: number;
        expanded?: boolean;
        html?: string;
        marginBottom?: number;
        marginTop?: number;
        minHeight?: number;
        moveDisabled?: boolean;
        tags?: any;
        toolTip?: string;
    }

    interface AreaData {
        width?: number;
        height?: number;
        cssClass?: string;
        right?: number;
        top?: number;
        left?: number;
        bottom?: number;
        visibility?: "Hover" | "Visible";
        html?: string;
        icon?: string;
        image?: string;
        padding?: number;
        background?: string;
        backColor?: string;
        toolTip?: string;
        fontColor?: string;
        id?: string | number;
        start?: Date | string;
        end?: Date | string;
        menu?: Menu | string;
        js: (args:any) => void | string;
        onClick?: (args:any) => void;
        onClicked?: (args:any) => void;
        action?: "None" | "JavaScript" | "ContextMenu" | "HoverMenu" | "ResizeEnd" | "ResizeStart" | "Move" | "Bubble";
    }

    function guid(): string;

}
/* Copyright 2005 - ${year} Annpoint, s.r.o.
 Use of this software is subject to license terms.
 https://www.Abhaas.org/
 */

import React from 'react';

export declare class AbhaasScheduler extends React.Component<Abhaas.SchedulerConfig> {
    control: Abhaas.Scheduler;
}

export declare class AbhaasCalendar extends React.Component<Abhaas.CalendarConfig> {
    control: Abhaas.Calendar;
}

export declare class AbhaasMonth extends React.Component<Abhaas.MonthConfig> {
    control: Abhaas.Month;
}

export declare class AbhaasGantt extends React.Component<Abhaas.GanttConfig> {
    control: Abhaas.Gantt;
}

export declare class AbhaasKanban extends React.Component<Abhaas.KanbanConfig> {
    control: Abhaas.Kanban;
}
export declare class AbhaasNavigator extends React.Component<Abhaas.NavigatorConfig> {
    control: Abhaas.Navigator;
}
