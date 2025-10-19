import type { ReactNode } from 'react';
interface UserModalProps{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
function Usermodal({isOpen, onClose, children}: UserModalProps) {
  if(!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-transparent bg-opacity-10 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose} // Close when clicking backdrop
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto p-auto"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {children}
      </div>
    </div>    
    
  );
}

export default Usermodal