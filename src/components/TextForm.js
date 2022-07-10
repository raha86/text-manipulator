import React, {useState} from 'react';
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onChange = (event)=>{
    setText(event.target.value);
  }
  function showAlert(msg){
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = `<b>Success: </b>${msg}`;
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none'}, 1500);
  }
  const toUpper = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    showAlert('Text converted to uppercase!');
  }
  const toLower = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    showAlert('Text converted to lowercase!');
  }
  function emptyElement(element){
    return element !== "";
  }
  const copy = () =>{
    navigator.clipboard.writeText(text);
    showAlert('Text copied!');
  }
  const clear = () =>{
    setText('');
    showAlert('Text cleared!');
  }
  function popUpCount(){
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.countWord').style.display = 'flex';
  }
  const countWord = () =>{
    let word = document.querySelector('.count').value.toLowerCase();
    let para = text.toLowerCase();
    para = para.split(' ');
    var wordCount = 0;
    para.forEach(item=>{
      if(item === word){
        wordCount = wordCount + 1;
      }
    });
    document.querySelector('.countOut').textContent = wordCount;
    showAlert('Mentoned word counted!');
  }
  function popUpReplace(){
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.replaceWord').style.display = 'flex';
  }
  const replaceWord = () =>{
    let oldWord = document.querySelector('.oldWord').value;
    oldWord = new RegExp(oldWord, "ig");
    // let oldWord = document.querySelector('.oldWord').value;
    let newWord = document.querySelector('.newWord').value;
    let oldText = text;
    let newText = oldText.replaceAll(oldWord, newWord);
    setText(newText);
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.replaceWord').style.display = 'none';
    showAlert('Mentoned word replaced!');
  }
  const popUpClose = () =>{
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.countWord').style.display = 'none';
    document.querySelector('.replaceWord').style.display = 'none';
  }
  
  
  return (
    <>
        <div className='container'>
            <div className="io">
                <h1 className='heading'>{props.heading}</h1>
                <textarea className="text" rows="10" value={text} onChange={onChange}></textarea>
                <div className="operations">
                  <button onClick={toUpper}>Convert to uppercase</button>
                  <button onClick={toLower}>Convert to lowercase</button>
                  <button onClick={copy}>Copy text</button>
                  <button onClick={clear}>Clear text</button>
                  <button onClick={popUpCount}>Count word</button>
                  <button onClick={popUpReplace}>Replace word</button>
                </div>
                <h1>Text summary</h1>
                <p></p>
                <p>{text.split(' ').filter(emptyElement).length} words, {text.length} characters</p>
                <p className="output"></p>
            </div>

            <div className="popup">
              <span className="cross" onClick={popUpClose}>X</span>
              <div className="countWord">
                <label htmlFor="">Enter word to count</label>
                <input type="text" className="count" />
                <p className="countOut"></p>
                <button onClick={countWord}>Count</button>
              </div>
              <div className="replaceWord">
                <label htmlFor="">Enter word to replace</label>
                <input type="text" className="oldWord" />
                <label htmlFor="">Enter new word</label>
                <input type="text" className="newWord" />
                <button onClick={replaceWord}>Replace</button>
              </div>
            </div>

            <div className="alert">
            </div>
        </div>
    </>
  )
}