interface IApplication {
    init: () => void;
    build: () => void;
    listen: () => void;
}

export default IApplication;
