import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import './Select.css'

const SelectDemo = () => (
    <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="Food">
            <Select.Value placeholder="Select a fruit…" />
            <Select.Icon className="SelectIcon">
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className="SelectContent">
                <Select.ScrollUpButton className="SelectScrollButton">
                </Select.ScrollUpButton>
                <Select.Viewport className="SelectViewport">
                    <Select.Group>
                        <Select.Label className="SelectLabel">Fruits</Select.Label>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                        <Select.Label className="SelectLabel">Vegetables</Select.Label>
                        <SelectItem value="aubergine">Aubergine</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="carrot" disabled>
                            Carrot
                        </SelectItem>
                        <SelectItem value="courgette">Courgette</SelectItem>
                        <SelectItem value="leek">Leek</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                        <Select.Label className="SelectLabel">Meat</Select.Label>
                        <SelectItem value="beef">Beef</SelectItem>
                        <SelectItem value="chicken">Chicken</SelectItem>
                        <SelectItem value="lamb">Lamb</SelectItem>
                        <SelectItem value="pork">Pork</SelectItem>
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="SelectScrollButton">
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

const SelectItem= React.forwardRef<
    React.ElementRef<typeof Select.Item>,
    React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, children, ...props }, ref) => {
    return (
        <Select.Item className={classnames('SelectItem', className)} {...props} ref={ref}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectDemo;