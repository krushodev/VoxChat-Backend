interface IAdapter {
    init: (uri: string) => void;
    close: () => void;
}

export default IAdapter;