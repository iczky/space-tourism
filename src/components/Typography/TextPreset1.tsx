import React from "react";

const TextPreset1: React.FC<TextPresetProps> = ({children}) => {
    return (
        <div className="text-9xl font-bellefair leading-[171.9%] tracking-[0px]">
            {children}
        </div>
    );
};

export default TextPreset1;