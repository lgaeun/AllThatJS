import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size, color}){
    //클래스 이름에 CSS클래스 이름 동적으로 넣어주기
    return <button className={classNames('Button', size, color)}>{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;


/*클래스 이름에 CSS클래스 이름 동적으로 넣어주기
className={['Button',size].join(' ')}
className = {`Button ${size}`}
*/

/* 이외에도 classNames라는 라이브러 사용이 더 편함
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(['foo', 'bar']); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있다
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// false, null, 0, undefined 는 무시된다
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

*/