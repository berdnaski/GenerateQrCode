import { useState } from 'react'
import './App.css'
import QrCodeLink from 'qrcode'
import QrCode from 'react-qr-code'

function App() {
  const [link, setLink] = useState('')
  const [qrCodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QrCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  } 

  return (

    <div className='container'>

      <QrCode
        value={link}
      />


      <input
      className='input'
      placeholder='Digite sua URL...'
      value={link}
      onChange={ (e) => handleQrcode(e)}
      />

      <a className='buttonQr' href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
  )
}

export default App
