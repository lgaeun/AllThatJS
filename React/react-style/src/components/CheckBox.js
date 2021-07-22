import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({children, checked, ...rest}){
    return (
      <div className={cx('checkbox')}>
        <label>
          <input type="checkbox" checked={checked} {...rest} />
          <div className={cx('icon')}>
            {checked ? (
              <MdCheckBox className={cx('checked')} />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </div>
        </label>
        <span>{children}</span>
      </div>
    );
}

export default CheckBox;

// css module 여러 개를 사용할 경우
// ${styles.one} ${styles.two} 처럼

// classnames bind기능 - 여러 개의 css 클래스 사용 or 조건부 스타일링 시
// - cx('클래스이름')
// - cx('one', 'two')
// - cx('my-component', {
//     condition: true
// })
// - cx('my-component', ['another', 'classnames'])

// css module은 Sass에서도 사용할 수 있음 (그냥 확장자를 .module.scss)
// 그 전에 node-sass 설치해야 함