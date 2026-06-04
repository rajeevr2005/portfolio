import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const WelcomeModal = () => {

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal");

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                const modal = document.getElementById("welcome_modal");
                if (modal && typeof modal.showModal === 'function') {
                    modal.showModal();
                    sessionStorage.setItem("hasSeenWelcomeModal", "true");
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <dialog id="welcome_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-center">
                    Welcome to My Portfolio
                </h3>

                <div className="flex items-center justify-center">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.tKJKut-6Lpo72ekrGumpqQAAAA?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>

                <p className="text-gray-600">

                </p>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-accent text-white">
                            Let's Start <FaArrowRight />
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default WelcomeModal;