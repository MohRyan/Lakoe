import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@mui/material";

interface Category {
  Id: string;
  name: string;
  parentId?: string;
  subcategories?: Category[];
}

interface CategoryDropdownProps {
  categories: Category[];
  selectedCategoriesId: string;
  handleCategoryChange: (categoriesId: string) => void;
}

const renderCategories = (
  categories: Category[],
  level: number = 0
): React.ReactNode[] => {
  return categories.flatMap((category) => {
    const menuItems: React.ReactNode[] = [];

    menuItems.push(
      <MenuItem
        key={category.Id}
        value={category.Id}
        style={{ paddingLeft: level * 16 }}
      >
        {category.name}
      </MenuItem>
    );

    if (category.subcategories && category.subcategories.length > 0) {
      menuItems.push(
        <ListSubheader key={`subheader-${category.Id}`} disableSticky>
          {category.name}
        </ListSubheader>
      );

      menuItems.push(...renderCategories(category.subcategories, level + 1));
    }

    return menuItems;
  });
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  categories,
  selectedCategoriesId,
  handleCategoryChange,
}) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategoriesId}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {renderCategories(categories)}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
