      { this.state.connected ?
        <span></span> :
        <div onClick={this.reconnect} style={{textAlign: 'center', witdh: '100%', background: 'red', height: '45px', position: 'relative', top: '-20px', marginBottom: '-20px'}}>
          <h3 style={{color: 'white'}}>Reconectar</h3>
        </div>
      }
