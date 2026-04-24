"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import {Description, ListBox, Select} from "@heroui/react";

export function FormPage ({FormDataPage}) {
  return (
    <Modal variant="ghost" >
      <Button variant="secondary">Add New Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={FormDataPage} className="flex flex-col gap-4">
                  <TextField className="w-full" >
                    <Label>Task Name</Label>
                    <Input name="name" type="text" placeholder="Enter your Tasks" />
                  </TextField>
                  <TextField className="w-full">
                    <Label> User Email</Label>
                    <Input  name="email" type="email" placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" >
                    <Label>Website</Label>
                    <Input name="Website" type="text" placeholder="Enter your Website" />
                  </TextField>
                  <Select className="w-[256px]" placeholder="Select one" name="Priority">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox className="text-black" >
          <ListBox.Item id="florida" textValue="Florida">
            High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Delaware">
            Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="california" textValue="California">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
      <Description>Select your state of residence</Description>
    </Select>
                  
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" type="submit">Add Task</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}