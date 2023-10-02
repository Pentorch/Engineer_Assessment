import WeatherCard from "../Card/Weather";
import ClearTaskAll from "@/components/atoms/Button/ClearTaskAll";
import AddTask from "@/components/atoms/Button/AddTask";
import Search from "@/components/atoms/Search";
import ToggleDarkMode from "@/components/atoms/Button/ToggleDarkMode";

export default function HeaderBar(props) {
  const { searchQuery, setIsDarkMode, isDarkMode } = props;

  return (
    <div>
      <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-80 p-[40px] mb-4 mt-10 w-[380px]">
        <WeatherCard />
      </div>
      <div className="flex justify-end  mr-4">
        <ClearTaskAll />
        <ToggleDarkMode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </div>

      <AddTask />
      <Search searchQuery={searchQuery} />
    </div>
  );
}
