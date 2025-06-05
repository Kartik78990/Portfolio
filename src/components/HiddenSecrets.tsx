import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { hiddenSecrets } from '../data/secrets';
import { X } from 'lucide-react';

const HiddenSecrets: React.FC = () => {
  const [secrets, setSecrets] = useState(hiddenSecrets);
  const [currentSecret, setCurrentSecret] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const handleSecretFound = (event: CustomEvent) => {
      const secretId = event.detail;
      const secret = secrets.find(s => s.id === secretId);
      
      if (secret && !secret.found) {
        // Mark secret as found
        setSecrets(prevSecrets => 
          prevSecrets.map(s => 
            s.id === secretId ? { ...s, found: true } : s
          )
        );
        
        // Show message
        setCurrentSecret(secretId);
        
        // Show confetti
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      // Add the key to the sequence
      const newSequence = [...keySequence, event.key];
      
      // Keep only the last 10 keys
      const limitedSequence = newSequence.slice(-10);
      setKeySequence(limitedSequence);
      
      // Check if any key sequence secret matches
      secrets.forEach(secret => {
        if (secret.trigger === 'key' && secret.triggerValue && !secret.found) {
          const keys = secret.triggerValue.split(',');
          
          // Check if the sequence ends with the trigger keys
          if (keys.length <= limitedSequence.length) {
            const sequenceToCheck = limitedSequence.slice(-keys.length);
            const matches = sequenceToCheck.every((key, index) => key === keys[index]);
            
            if (matches) {
              document.dispatchEvent(new CustomEvent('secretFound', { detail: secret.id }));
            }
          }
        }
      });
    };

    // Add event listeners
    document.addEventListener('secretFound', handleSecretFound as EventListener);
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      // Remove event listeners
      document.removeEventListener('secretFound', handleSecretFound as EventListener);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [secrets, keySequence]);

  const handleCloseMessage = () => {
    setCurrentSecret(null);
  };

  const foundSecretsCount = secrets.filter(s => s.found).length;
  const totalSecrets = secrets.length;

  return (
    <>
      {/* Confetti effect */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.15}
          colors={['#7E74F1', '#00D4FF', '#FC7613', '#18D16F', '#FFB800']}
        />
      )}
      
      {/* Secret message popup */}
      <AnimatePresence>
        {currentSecret && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
          >
            <div className="bg-surface border border-primary/30 rounded-lg shadow-lg p-4 relative">
              <button
                onClick={handleCloseMessage}
                className="absolute top-2 right-2 text-text-tertiary hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-3 flex items-center justify-center">
                <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Secret Discovered!
                </span>
              </div>
              
              <p className="text-center mb-3">
                {secrets.find(s => s.id === currentSecret)?.message}
              </p>
              
              <div className="text-center text-xs text-text-tertiary">
                You've found {foundSecretsCount} out of {totalSecrets} secrets!
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HiddenSecrets;