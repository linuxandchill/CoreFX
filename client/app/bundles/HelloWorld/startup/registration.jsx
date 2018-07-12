import ReactOnRails from 'react-on-rails';

import Thegreatdeception from '../components/Thegreatdeception';
import Megabanks from '../components/Megabanks';
import Liquidity from '../components/Liquidity';
import Brokers from '../components/Brokers';
import Candlesticks from '../components/Candlesticks';
import Candlesticks2 from '../components/Candlesticks2';
import Pullbacks from '../components/Pullbacks';
import Manipulationphases from '../components/Manipulationphases';
import Sessions from '../components/Sessions';
import Levels from '../components/Levels';
import Setups from '../components/Setups';
import Setups2 from '../components/Setups2';
import Riskreward from '../components/Riskreward';
import Stoploss from '../components/Stoploss';
import Psychology from '../components/Psychology';
import Newsreleases from '../components/Newsreleases';
import ProgressCheck from '../utils/ProgressCheck';
import Levels2 from '../components/Levels2';
import Eurogbp from '../components/Eurogbp';
import Bigpippin from '../components/Bigpippin';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Thegreatdeception,
  Megabanks,
  Brokers,
  Candlesticks,
  Manipulationphases,
  Candlesticks2,
  Levels,
  Psychology,
  Pullbacks,
  Setups,
  Stoploss,
  Setups2,
  Sessions,
  Riskreward,
  Newsreleases,
  Liquidity,
  ProgressCheck,
  Bigpippin,
  Eurogbp,
  Levels2,
});
