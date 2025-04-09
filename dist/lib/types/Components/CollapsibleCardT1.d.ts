import React from 'react';
export interface CollapsibleCardT1Props {
    title?: React.ReactNode;
    headerContent?: React.ReactNode;
    bodyContent?: React.ReactNode;
    footerContent?: React.ReactNode;
    collapseContent?: React.ReactNode;
    defaultCollapsed?: boolean;
    cardSx?: any;
    headerSx?: any;
    bodySx?: any;
    footerSx?: any;
    collapseSx?: any;
    collapseButtonSx?: any;
    hideCollapseButton?: boolean;
    loading?: boolean;
}
declare const CollapsibleCardT1: React.FC<CollapsibleCardT1Props>;
export default CollapsibleCardT1;
