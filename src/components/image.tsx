import React, { useState, ChangeEvent } from 'react';
import { IoPerson } from 'react-icons/io5';

const ImageUploader: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // Handler for file input change event
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            // Update the state with the selected file
            setImageFile(file);

            // Create a URL for the selected file to preview the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    

    return (
        <div >
            <span className='hidden'>{imageFile?.name}</span>
            <input
                id='img_input'
                title="Upload Image"
                type="file"
                accept="image/*"
                className='hidden'
                onChange={handleFileChange}
            />

            <div className='flex h-12 w-12 justify-center items-center overflow-hidden bg-gray-200 rounded-full'>
                {imagePreview ? (
                    <label htmlFor="img_input" className='h-full w-full'>
                        <img
                            title="Avatar"
                            aria-label="preview"
                            src={imagePreview}
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
