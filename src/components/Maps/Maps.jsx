import React from 'react';
import styles from '../Maps/Maps.module.css'

const Maps = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.maps_this}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5afe904d7ef6e953f635fb861820c3b6b68f39a8861138e3577926f1ff939aff&amp;source=constructor" width="100%" height="400px" frameborder="0"></iframe>
            </div>
        </div>
    );
};

export default Maps;