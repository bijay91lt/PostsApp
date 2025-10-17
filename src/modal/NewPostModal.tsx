import type {ReactNode} from 'react';

interface NewPostModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

function NewPostModal({isOpen, onClose, children}: NewPostModalProps){
    if(!isOpen) return null;

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={onClose}>
        
            <div 
                className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {children}
            </div>
        </div>

        </>
    )
}

export default NewPostModal;