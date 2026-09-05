import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
        >
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl backdrop-blur-md">
            {type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-violet-400 shrink-0" />
            )}
            <p className="text-xs text-slate-200 flex-1 leading-relaxed">{message}</p>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer rounded-lg hover:bg-slate-800"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
