import TextPreset1 from "../../Typography/TextPreset1.tsx";

const HomeHero = () => {
    return (
        <div className="p-7">
            <div className="flex flex-col gap-7 items-center justify-center">
                <TextPreset1>
                    <p className="text-planet-blue-300">So, you want to visit planet?</p>
                </TextPreset1>
            </div>
        </div>
    );
};

export default HomeHero;