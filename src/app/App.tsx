import { Game } from '../components/Game/Game.tsx';
import { CONFIG_8_OUT_OF_19 } from '../common/constants/gameConfigs/config8OutOf19.ts';

export function App() {
  return <Game gameConfig={CONFIG_8_OUT_OF_19} />;
}
