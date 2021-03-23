import { Type } from '@angular/core';

export interface OptionsModal {
    title: string;
    component: Type<any>;
    CssStyles: CSSStyles | null;
    parameters: any[];
}

export interface CSSStyles {
    width: string;
}
