import React, { ChangeEvent } from 'react';
import { IoPerson } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../data/hooks';
import { selectChat, setProfile } from '../data/features/message/messageSlice';

const ImageUploader: React.FC = () => {
    const dispatch = useAppDispatch()
    const { profile } = useAppSelector(selectChat)

    // Handler for file input change event
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // setImagePreview(reader.result as string);
                dispatch(setProfile(reader.result as string))
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div >
            <input
                id='img_input'
                title="Upload Image"
                type="file"
                accept="image/*"
                className='hidden'
                onChange={handleFileChange}
            />

            <div className='flex h-12 w-12 justify-center items-center overflow-hidden bg-gray-200 rounded-full'>
                {profile ? (
                    <label htmlFor="img_input" className='h-full w-full'>
                        <img
                            title="Upload Avatar"
                            aria-label="preview"
                            src={profile}
                            alt="Preview"
                            className="h-full w-full object-cover"
                        />
                    </label>

                ) :
                    <label htmlFor="img_input">
                        <IoPerson className="size-8 top-2 text-white" />
                    </label>
                }
            </div>
        </div>
    );
};

export default ImageUploader;
