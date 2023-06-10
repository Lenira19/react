const Loading = ({ text, image }) => {

    return (
        <>
            <div class="flex justify-center items-center h-[70vh] text-4xl">{text}</div>

            <video src={image} ></video>




        </>

    );



};

export default Loading;