import React, { useEffect, useState } from "react"
import './modal.styles.scss';

export type ModalClassTypes = 'out' | 'modal-sketch' | undefined;
type ModalComponentType = {
    modal_class: ModalClassTypes;
    children?: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const ModalComponent: React.FC<ModalComponentType> = ({ modal_class, children }) => {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(
        () => {
            if (modal_class) {
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                }, 500);
            }
        }, [modal_class]
    );

    return (
        <div id="modal-container" className={modal_class} data-testid="modal-container">
            <div className="modal-background">
                <div className="modal">
                    {children}
                    {visible &&
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"></rect>
                        </svg>
                    }
                </div>
            </div>
        </div>
    );
}