import styles from './style.module.css';
import googlePlay from '@/assets/download-googleplay.png';
import appStore from '@/assets/download-appstore.png';
import Icon from '@/components/Icon';

export default function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <ul>
        <li className="flex items-center gap-2 my-2 text-lg">
          <Icon name="Check" color="green" size="24px" />
          Listen unlimited audios
        </li>
        <li className="flex items-center gap-2 my-2 text-lg">
          <Icon name="Check" color="green" size="24px" />
          Dowload audio to listen offline
        </li>
        <li className="flex items-center gap-2 my-2 text-lg">
          <Icon name="Check" color="green" size="24px" />
          App works offline
        </li>
        <li className="flex items-center gap-2 my-2 text-lg">
          <Icon name="Check" color="green" size="24px" />
          Favorite your contents to listen later
        </li>
      </ul>
      <div className="w-full flex-col flex items-start bg-gray-100 p-8 rounded-xl mt-4">
        <strong className="text-4xl text-primary">
          $ 9.99<small className="text-xs text-primary">/month</small>
        </strong>
        <span className="text-xs text-gray-700">
          after 30 days. Cancel anytime.
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mt-4">
        <button
          type="button"
          onClick={() => {
            window.open(
              'https://play.google.com/store/apps/details?gl=US&amp;hl=en&amp;id=com.cavernalabs.nekhor',
              '_blank',
            );
          }}
        >
          <img
            src={googlePlay}
            height="46"
            className="max-h-[72px] md:max-h-[46px]"
            alt="Google Play"
          />
        </button>
        <button
          type="button"
          onClick={() => {
            window.open(
              'https://apps.apple.com/us/app/nekhor/id1495713473',
              '_blank',
            );
          }}
        >
          <img
            src={appStore}
            height="42"
            className="max-h-[72px] md:max-h-[42px]"
            alt="App Store"
          />
        </button>
      </div>
    </section>
  );
}
