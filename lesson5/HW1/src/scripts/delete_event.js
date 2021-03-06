import { funcForMakeMarkValuableNull, funcForMakeDataIdEmpty } from './edit_event.js.js';
import { dataId } from './edit_event.js.js';
import { setItem, getItem } from './storage.js.js';
import { renderEventObject } from './generate_event_object.js.js';
import { renderRedLIne } from './redline.js.js';
import { onClearValidateMessages, onMakeMarkOnValidateTextNull } from './validate.js.js';
import { getEventList, deleteEvent } from './eventsGateway.js.js'

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');

export const funcForDeleteEvene = () => {
    const eventsArray = getItem('eventsArray') || [];
    const currentObject = eventsArray.find(elem => elem.id === dataId);
    deleteEvent(currentObject.id)
        .then(() => getEventList())
        .then(eventsArray => {
            setItem('eventsArray', eventsArray);
            renderEventObject();
            funcForMakeMarkValuableNull();
            funcForMakeDataIdEmpty();
            renderRedLIne();
            onClearValidateMessages();
            onMakeMarkOnValidateTextNull();
        })
        .catch(err => {
            err.message = 'Server calls limit is exceeded. Need to update server URL';
            alert(err);
        });
    popupBlock.style.display = 'none';
    deleteBasket.style.display = 'none';
};
deleteBasket.addEventListener('click', funcForDeleteEvene);