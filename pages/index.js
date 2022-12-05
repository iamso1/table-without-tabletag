import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Home from './Home';

export default function APP() {
  return (
    <div className="myTable">
      <div className="myTable-caption">電台資訊</div>
      <div className="myTable-th">
        <div className="myTable-thc">Header 1</div>
        <div className="myTable-thc">Header 2</div>
        <div className="myTable-thc">Header 3</div>
        <div className="myTable-thc">Header 4</div>
      </div>
      <div className="myTable-tbody">
        <div className="myTable-tr">
          <div className="myTable-td">123</div>
          <div className="myTable-td">123</div>
          <div className="myTable-td">123</div>
          <div className="myTable-td">123</div>
        </div>
      </div>
    </div>
  );
}
