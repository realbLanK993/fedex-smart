import HoverList from "@/components/common/hover-list";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const research = [
  {
    title: "Title One",
    learn_more_link: "string",
    className: "border-t-2",
  },
  {
    title: "Title Two",
    learn_more_link: "string",
  },
  {
    title: "Title Three",
    learn_more_link: "string",
  },
  {
    title: "Title Four",
    learn_more_link: "string",
  },
  {
    title: "Title Five",
    learn_more_link: "string",
  },
];

export default function Research(){
    return (
      <main className="defined-width pt-16 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">All Research</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            velit accusamus illum consectetur est dicta esse ducimus dolore
            cupiditate voluptatum aperiam commodi dolorem ratione architecto
            vitae quae autem porro magni, repellendus molestiae nam voluptates.
            Libero maxime molestiae eum autem nemo debitis error fuga veritatis
            doloribus, eaque ut. Dolor, expedita odio!
          </p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-4 w-full">
            <Label>Core Research</Label>
            <Select>
              <SelectTrigger className="max-w-[380px] w-full rounded-full">
                <SelectValue placeholder="Research Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">Title One</SelectItem>
                <SelectItem value="two">Title Two</SelectItem>
                <SelectItem value="three">Title Three</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <Button>Filter</Button> */}
        </div>
        <div>
          {research.map((item, index) => {
            return <HoverList key={index} {...item} />;
          })}
        </div>
      </main>
    );
}