function component() {
  const element = document.createElement('pre');
  
  element.innerHTML = [
    'Hello webpack!',
  ];
  
  return element;
}
  
document.body.appendChild(component());