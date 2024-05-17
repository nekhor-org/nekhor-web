import { useModel } from '@modern-js/runtime/model';
import styles from './style.module.css';
import uiModel from '@/models/ui';

export default function Share() {
  const [state] = useModel(uiModel);

  const shareBy = (type: string) => {
    if (type === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${state?.menuDrawer?.url}`,
        '_blank',
      );
    } else if (type === 'whatsapp') {
      window.open(
        `https://api.whatsapp.com/send?text=${state?.menuDrawer?.url}`,
        '_blank',
      );
    } else if (type === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?url=${state?.menuDrawer?.url}`,
        '_blank',
      );
    }
  };
  return (
    <section className={styles.share}>
      <div className="flex flex-col items-center w-full gap-4 mt-4">
        <button
          onClick={() => shareBy('facebook')}
          type="button"
          className="w-full py-4 px-8 bg-gray-100 flex items-center justify-center gap-1 rounded-lg"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
            width="32"
            height="32"
            alt="Facebook"
          />
          Facebook
        </button>
        <button
          onClick={() => shareBy('whatsapp')}
          type="button"
          className="w-full py-4 px-8 bg-gray-100 flex items-center justify-center gap-1 rounded-lg"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            width="42"
            height="42"
            alt="Whatsapp"
          />
          Whatsapp
        </button>
        <button
          onClick={() => shareBy('twitter')}
          type="button"
          className="w-full py-4 items-center flex justify-center gap-2 px-8 bg-gray-100 rounded-lg"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
            width="26"
            height="26"
            alt="Twitter"
          />
          Twitter
        </button>
      </div>
    </section>
  );
}
