import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';


const VoiceToTextConverter = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const startListening = () => {
    // Code to start listening to user's voice and convert to text
    setListening(true);
  };

  const stopListening = () => {
    // Code to stop listening to user's voice
    setListening(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {listening ? (
          <StopIcon style={{ fontSize: 50, color: 'red', cursor: 'pointer' }} onClick={stopListening} />
        ) : (
          <MicIcon style={{ fontSize: 50, color: 'green', cursor: 'pointer' }} onClick={startListening} />
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <textarea
          rows={10}
          cols={50}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ resize: 'none' }}
          readOnly={false}
        />
      </div>
    </div>
  );
};

export default VoiceToTextConverter;
