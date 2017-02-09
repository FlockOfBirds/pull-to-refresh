import { DOM, createElement } from "react";

import * as PullToRefresh from "react-pull-to-refresh";

// import * as Hammer from "hammerjs";


export const PullToRefreshComponent = () => {
    return createElement(PullToRefresh, {
        onRefresh: handleRefresh
    },
        DOM.div({className: "class1"}, "this is Element1"),
        DOM.div({className: "class2"}, "this is Element2"),
        DOM.div({className: "class3"}, "this is Element3"),
        DOM.div({className: "class4"}, "this is Element4")
    );
};

const handleRefresh = (resolve: any, reject: any) => {
    if (resolve) {
        mx.ui.error("resolved");
    }
    if ( reject) {
        mx.ui.error("Error reject");
    }
};
