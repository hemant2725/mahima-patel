import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen section-dark px-4 sm:px-6 md:px-12 pt-28 pb-24">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="label-gold">404</p>
        <h1 className="heading-2 text-white text-[clamp(2rem,4vw,3.2rem)] mt-4">
          The page you&apos;re looking for does not exist.
        </h1>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="cta-button mt-8 inline-flex"
        >
          Return Home
        </button>
      </div>
    </main>
  );
}
