import { useLockBody } from '@/hooks/use-lock-body';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useLockBody(isLoading);

  useEffect(() => {
    setIsLoading(false);
    document.body.classList.remove('fixed');
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, delay: 0.35 }}
          className="bg-neutrals-900 fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: [1, 0, 0],
              scale: [1, 0.75, 0],
            }}
            transition={{ duration: 0.5 }}
            className="h-24 w-24 animate-pulse flex items-center justify-center text-primary font-bold text-2xl"
          >
            R
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { LoadingScreen };
