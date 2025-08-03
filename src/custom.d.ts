declare global {
  interface Window {
    DirectLine?: any;
    Calendly?: any;
    webkitSpeechRecognition?: any;
    startOver?: () => void;
    sendMessage?: () => void;
    renderMenu?: () => void;
    showPrivacyPolicy?: () => void;
  }
  type SpeechRecognition = any;
  type SpeechRecognitionEvent = any;
}
export {}; 