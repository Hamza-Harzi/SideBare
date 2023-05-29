<template #body>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Name" prop="pass">
      <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Profession" prop="profession">
      <el-input v-model="ruleForm.profession" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item label="Genre" prop="genre">
      <el-input v-model="ruleForm.genre" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  name: "",
  profession: "",
  age: "",
  genre: "",
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
