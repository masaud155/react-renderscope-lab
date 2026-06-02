import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChecklistItem from "@/components/checklist/ChecklistItem";

export default function ChecklistCategory({ category, checked, toggle }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-white">{category.title}</h2>
      </CardHeader>
      <CardContent className="space-y-3">
        {category.items.map((item, index) => (
          <ChecklistItem key={item.question} item={item} id={`${category.id}-${index}`} checked={checked[`${category.id}-${index}`]} toggle={toggle} />
        ))}
      </CardContent>
    </Card>
  );
}
