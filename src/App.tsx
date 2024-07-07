/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Colors } from './constants/colors';

const App = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        gap: 50px;
        background-color: ${Colors.black};
      `}
    >
      <LoadingSpinner size={20} />
      <LoadingSpinner size={50} />
      <LoadingSpinner size={100} />
      <LoadingSpinner size={100} styleType='white' />

      <button
        type='button'
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 38px;
          padding: 8px 12px;
          border-radius: 8px;
          background-color: ${Colors.primary[100]};
          color: ${Colors.white};
          outline: none;
          cursor: wait;
        `}
      >
        <LoadingSpinner styleType='white' size={23} />
      </button>
    </div>
  );
};

export default App;
