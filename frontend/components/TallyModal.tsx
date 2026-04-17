import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface TallyModalProps {
  formId: string;
  children: React.ReactNode;
  className?: string;
}

export function TallyModal({ formId, children, className }: TallyModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <span onClick={() => setIsOpen(true)} className={`cursor-pointer ${className || ""}`}>
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                data-testid="tally-modal-close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Iframe container */}
              <div className="relative w-full h-full">
                <iframe
                  src={`https://tally.so/r/${formId}?transparentBackground=1`}
                  className="w-full h-full border-0"
                  title="Formulario"
                />
                {/* Overlay to cover "Hecho con Tally" badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white pointer-events-none rounded-b-2xl"
                  style={{ zIndex: 10, height: '48px' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
