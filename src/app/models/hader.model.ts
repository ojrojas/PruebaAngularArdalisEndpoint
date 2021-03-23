export interface HeaderModel {
    title: string;
    subtitle: string;
    buttons: ConfigButtons[];
}

export interface ConfigButtons {
    color: string;
    description: string;
    action: () => {};
}
