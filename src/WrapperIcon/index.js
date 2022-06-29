import "./WrapperIcon.scss";

const WrapperIcon = (props) => {
    const { children, ...otherProps } = props;

    return (
        <div
            className="HvdWrapperIcon"
            style={{
                ...otherProps,
            }}
        >
            {children}
        </div>
    );
};

export default WrapperIcon;
