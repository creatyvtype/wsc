import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Taxonomy from "./Taxonomy";

import styles from "../../styles/Item.scss";

const ImageContainer = ({ item, imageOption, onChange }) => {
    return (
        <div className={styles.imageContainer}>
            <Taxonomy item={item} imageOption={imageOption} />
            <div className={styles.mainImage}>
                <img src={imageOption.imageUrl} />
            </div>
            <div className={styles.imageOptionWrapper}>
                {item.imageOptions.map(option => (
                    <div
                        key={option.id}
                        className={classnames(styles.imageOption, {
                            [styles.selectedOption]:
                                imageOption.id === option.id
                        })}
                        onClick={() => onChange({imageOption: option})}
                    >
                        <img src={option.thumbUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
};

ImageContainer.propTypes = {
    item: PropTypes.object.isRequired,
    imageOption: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ImageContainer;
