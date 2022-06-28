import React from "react";

const WrapperIcon = (props) => {
    const {
        children,
        color = "#000",
        width = "50px",
        height = "50px",
        border = "1px solid #000",
        borderRadius = "5px",
        display = "flex",
        justifyContent = "center",
        alignItems = "center",
        cursor = "pointer",

        ...otherProps
    } = props;
    return (
        <div
            id="WrapperIcon"
            style={{
                color,
                width,
                height,
                border,
                borderRadius,
                display,
                justifyContent,
                alignItems,
                cursor,
                ...otherProps,
            }}
        >
            {children}
        </div>
    );
};

export default WrapperIcon;
