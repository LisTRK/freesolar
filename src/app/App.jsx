import SurveyModal from "@/features/survey/components/SurveyModal.jsx";
import { useModalStore } from "@/shared/store/modal/modalStore.js";
import { MODAL_NAMES } from "@/shared/constants/modalNames.js";
import Footer from "@/layout/Footer/Footer.jsx";
import PageBackground from "@/layout/PageBackground/PageBackground.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Projects from "@/sections/Projects/Projects.jsx";
import "./App.css";

function App() {
  const isSurveyOpen = useModalStore((state) => state[MODAL_NAMES.SURVEY]);
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="page">
      <PageBackground />

      <main className="main" aria-label="Головний вміст">
        <Hero onSurveyOpen={() => openModal(MODAL_NAMES.SURVEY)} />
        <Projects />
      </main>

      <SurveyModal
        open={isSurveyOpen}
        onClose={() => closeModal(MODAL_NAMES.SURVEY)}
      />

      <Footer />
    </div>
  );
}

export default App;
