import { Suspense } from "react";
import { LoaderSpinner } from "./LoaderSpinner";

interface IVideoWrapper {
    youTubeUrl: string;
}

export const VideoWrapper = ({ youTubeUrl = "" }: IVideoWrapper) => {
    return (
        <Suspense fallback={<LoaderSpinner />}>
            <div className='mx-auto max-w-7xl mt-8 mb-8'>
                <iframe className='w-full aspect-video rounded-b-md' width="auto" height="auto" src={youTubeUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
        </Suspense>
    )
}