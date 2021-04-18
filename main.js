console.log(data);

const passiveAbilityCost = 10;

const pageCount = 8;
let currentPage = 1;

let trackedData = {
  "CharName": "",
  "CharSpecies": 0,
  "CharAge": 0,
  "CharGender": 0,
  "CharHairColour": 0,
  "CharEyeColour": 0,
  "CharHeight": 0,
  "CharBuild": 0,
  "CharWealth": 0,
  "PersonalityData": [],
  "Flaws": [],
  "DnaBalance": [0, 0, 0],
  "Skills": [[], [], []],
  "Abilities": [],
  "MotiveType": 0,
  "MotiveDesc": "",
  "MotiveRes": "",
  "CharBio": "",
  "CharExtBio": ""
};

function buildMcs() {
  $("#mcsName").html(trackedData.CharName);
  $("#mcsBio").html(trackedData.CharBio);

  $("#mcsWealth").html(data.Customization.Wealth[trackedData.CharWealth]);
  $("#mcsAge").html(data.Customization.Age[trackedData.CharAge]);
  $("#mcsHair").html(data.Customization.HairColor[trackedData.CharHairColour]);
  $("#mcsHeight").html(data.Customization.Height[trackedData.CharHeight]);
  $("#mcsSpecies").html(data.Customization.Species[trackedData.CharSpecies]);
  $("#mcsGender").html(data.Customization.Gender[trackedData.CharGender]);
  $("#mcsEye").html(data.Customization.EyeColor[trackedData.CharEyeColour]);
  $("#mcsBuild").html(data.Customization.Build[trackedData.CharBuild]);

  $("#mcsCharTraits").html("");
  for (let i = 0; i < trackedData.PersonalityData.length; i++) {
    const persData = trackedData.PersonalityData[i];
    for (const trait of persData.CharTraits) {
      $("#mcsCharTraits").append('<div class="row"><div class="col">' + data.PersTraits[i].Options[persData.Selected].CharTraits[trait] + '</div></div>');
    }
  }

  $("#mcsPers").html("");
  for (let i = 0; i < trackedData.PersonalityData.length; i++) {
    const persData = trackedData.PersonalityData[i];
    let cont = "";
    cont += '<div class="col-sm-6 col-md-4 col-lg">';
    cont += '<h5>' + data.PersTraits[i].Options[persData.Selected].Name + '</h5>';
    cont += '<hr class="m-0" />';
    
    if (persData.Passives.length > 0) {
      cont += '<ul>';
      cont += '';
      for (const passive of persData.Passives) {
        cont += '<li>' + data.PersTraits[i].Options[persData.Selected].Abilities[passive].Name + '</li>';
      }
      cont += '</ul>';
    }
    else {
      cont += '<small class="text-secondary">No passives</small>';
    }
    
    cont += '</div>';
    
    $("#mcsPers").append(cont);
  }

  $("#mcsFlaws").html(trackedData.Flaws.length > 0 ? "" : "No flaws");
  for (let i = 0; i < trackedData.Flaws.length; i++) {
    const flaw = trackedData.Flaws[i];
    let cont = "";
    cont += '<div class="row mb-2">';
    cont += '<div class="col-12 col-md-auto">';
    cont += '<strong>' + flaw.Name + '</strong> <small class="text-secondary">(' + flaw.Category + ' - ' + flaw.Dna + ' - ' + flaw.Intensity + ')</small>';
    cont += '</div>';
    cont += '<div class="col">';
    cont += flaw.Effect;
    cont += '</div>';
    cont += '</div>';
    
    $("#mcsFlaws").append(cont);
  }

  $("#mcsProgBalance").html("(" + trackedData.DnaBalance[0] + ")");
  $("#mcsSenBalance").html("(" + trackedData.DnaBalance[1] + ")");
  $("#mcsIntBalance").html("(" + trackedData.DnaBalance[2] + ")");
  
  $("#mcsProgSkills").html("");
  if (trackedData.Skills[0].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[0]) {
      cont += '<li>' + data.DnaData.Skills[0][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsProgSkills").html(cont);
  }
  else {
    $("#mcsProgSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  $("#mcsSenSkills").html("");
  if (trackedData.Skills[1].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[1]) {
      cont += '<li>' + data.DnaData.Skills[1][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsSenSkills").html(cont);
  }
  else {
    $("#mcsSenSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  $("#mcsIntSkills").html("");
  if (trackedData.Skills[2].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const skill of trackedData.Skills[2]) {
      cont += '<li>' + data.DnaData.Skills[2][skill.Index].Name + ' <small class="text-secondary">' + skill.Level + '</small></li>';
    }
    cont += '</ul>';
    $("#mcsIntSkills").html(cont);
  }
  else {
    $("#mcsIntSkills").html('<small class="text-secondary">No Skills</small>');
  }
  
  let abilities = [[], [], []];
  for (const ability of trackedData.Abilities) {
    abilities[ability.Type].push(ability.Index);
  }

  $("#mcsProgAbilities").html("");
  if (abilities[0].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[0]) {
      cont += '<li>' + data.Abilities[0][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsProgAbilities").html(cont);
  }
  else {
    $("#mcsProgAbilities").html('<small class="text-secondary">No Abilities</small>');
  }

  $("#mcsSenAbilities").html("");
  if (abilities[1].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[1]) {
      cont += '<li>' + data.Abilities[1][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsSenAbilities").html(cont);
  }
  else {
    $("#mcsSenAbilities").html('<small class="text-secondary">No Abilities</small>');
  }

  $("#mcsIntAbilities").html("");
  if (abilities[2].length > 0) {
    let cont = "";
    cont += '<ul>';
    for (const ability of abilities[2]) {
      cont += '<li>' + data.Abilities[2][ability].Name + '</li>';
    }
    cont += '</ul>';
    $("#mcsIntAbilities").html(cont);
  }
  else {
    $("#mcsIntAbilities").html('<small class="text-secondary">No Abilities</small>');
  }
}

function fillCustomizations() {
  $("#species").html("");
  for (const item of data.Customization.Species) {
    $("#species").append('<option>' + item + '</option>');
  }

  $("#charAge").html("");
  for (const item of data.Customization.Age) {
    $("#charAge").append('<option>' + item + '</option>');
  }

  $("#gender").html("");
  for (const item of data.Customization.Gender) {
    $("#gender").append('<option>' + item + '</option>');
  }

  $("#hairColor").html("");
  for (const item of data.Customization.HairColor) {
    $("#hairColor").append('<option>' + item + '</option>');
  }

  $("#eyeColor").html("");
  for (const item of data.Customization.EyeColor) {
    $("#eyeColor").append('<option>' + item + '</option>');
  }

  $("#height").html("");
  for (const item of data.Customization.Height) {
    $("#height").append('<option>' + item + '</option>');
  }

  $("#build").html("");
  for (const item of data.Customization.Build) {
    $("#build").append('<option>' + item + '</option>');
  }

  $("#wealth").html("");
  for (const item of data.Customization.Wealth) {
    $("#wealth").append('<option>' + item + '</option>');
  }
}

function fillPersonalityTrackedData() {
  trackedData.PersonalityData = [];
  for (const persTrait of data.PersTraits) {
    trackedData.PersonalityData.push({"Selected": 0, "Passives": [], "CharTraits": []});
  }
}

function buildPersonalityControls(container) {
  for (const persTrait of data.PersTraits) {
    let traitCont = "";
    traitCont += '<div class="mb-3">';
    traitCont += '<div><label class="form-label help-desc-button" data-target="' + persTrait.Id + 'Desc">' + persTrait.Name + ' <i class="bi-question-octagon-fill"></i></label></div>';
    traitCont += '<div id="' + persTrait.Id + 'Desc" class="card toggle-desc">';
    traitCont += '<div class="card-body"><small>' + persTrait.Description + '</small></div>';
    traitCont += '</div>';
    
    for (let i = 0; i < persTrait.Options.length; i++) {
      const traitOption = persTrait.Options[i];
      const checkedText = i == 0 ? "checked" : "";
      traitCont += '<div class="form-check form-check-inline">';
      traitCont += '<input class="form-check-input ' + persTrait.Id + '-radio" type="radio" name="' + persTrait.Id + 'Options" id="' + traitOption.Id + 'Option" value="' + i + '" ' + checkedText + '>';
      traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'Option">' + traitOption.Name + '</label>';
      traitCont += '</div>';
    }
    
    traitCont += '</div>';

    for (let i = 0; i < persTrait.Options.length; i++) {
      const traitOption = persTrait.Options[i];
      const hiddenClass = i == 0 ? "" : "hidden-at-start";
      traitCont += '<div class="mb-3">';
      traitCont += '<div id="' + traitOption.Id + 'Traits" class="trait-card card ' + hiddenClass + '">';
      traitCont += '<div class="card-body">';
      traitCont += '<label>Passive Abilities <small class="text-secondary">Each ability costs ' + passiveAbilityCost + ' points</small></label>';
      traitCont += '<hr class="m-0" />';
      
      for (let i = 0; i < traitOption.Abilities.length; i++) {
        const traitAbility = traitOption.Abilities[i];
        traitCont += '<div class="row m-0">';
        traitCont += '<div class="col-12 col-md-auto form-check">';
        traitCont += '<input class="form-check-input" type="checkbox" value="" id="' + traitOption.Id + 'Trait' + i + '" aria-describedby="' + traitOption.Id + 'Trait' + i + 'Help">';
        traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'Trait' + i + '">' + traitAbility.Name + '</label>';
        traitCont += '</div>';
        traitCont += '<div id="' + traitOption.Id + 'Trait' + i + 'Help" class="col trait-help">' + traitAbility.Description + '</div>';
        traitCont += '</div>';
      }

      if (traitOption.CharTraits.length > 0) {
        traitCont += '<label class="mt-3">Character Traits <small class="text-secondary">Pick traits that best describe your character</small></label>';
        traitCont += '<hr class="m-0" />';
        traitCont += '<div class="row m-0">';
        traitCont += '<div class="g-0">';
        for (let i = 0; i < traitOption.CharTraits.length; i++) {
          const charTrait = traitOption.CharTraits[i];
          traitCont += '<div class="form-check form-check-inline">';
          traitCont += '<input class="form-check-input" type="checkbox" id="' + traitOption.Id + 'CharTrait' + i + '">';
          traitCont += '<label class="form-check-label" for="' + traitOption.Id + 'CharTrait' + i + '">' + charTrait + '</label>';
          traitCont += '</div>';
        }
        traitCont += '</div>';
        traitCont += '</div>';
      }

      traitCont += '</div>';
      traitCont += '</div>';
      traitCont += '</div>';
    }
    
    $(container).append(traitCont);
  }
}

function selectPersonality(persIndex, optionIndex) {
  let personalityData = trackedData.PersonalityData;
  personalityData[persIndex].Selected = optionIndex;
  personalityData[persIndex].Passives = [];
  onTrackedDataChange("PersonalityData", personalityData);
}

function selectedTraitChanged(persIndex, optionIndex, traitIndex, isChecked) {
  let personalityData = trackedData.PersonalityData;
  if (personalityData[persIndex].Selected !== optionIndex) {
    return;
  }

  let index = -1;
  for (let i = 0; i < personalityData[persIndex].Passives.length; i++) {
    if (personalityData[persIndex].Passives[i] === traitIndex) {
      index = i;
      break;
    }
  }
  
  if (isChecked && index < 0) {
    personalityData[persIndex].Passives.push(traitIndex);
  }
  else if (!isChecked && index >= 0) {
    personalityData[persIndex].Passives.splice(index, 1);
  }

  onTrackedDataChange("PersonalityData", personalityData);
}

function selectedCharTraitChanged(persIndex, optionIndex, traitIndex, isChecked) {
  let personalityData = trackedData.PersonalityData;
  if (personalityData[persIndex].Selected !== optionIndex) {
    return;
  }

  let index = -1;
  for (let i = 0; i < personalityData[persIndex].CharTraits.length; i++) {
    if (personalityData[persIndex].CharTraits[i] === traitIndex) {
      index = i;
      break;
    }
  }
  
  if (isChecked && index < 0) {
    personalityData[persIndex].CharTraits.push(traitIndex);
  }
  else if (!isChecked && index >= 0) {
    personalityData[persIndex].CharTraits.splice(index, 1);
  }

  onTrackedDataChange("PersonalityData", personalityData);
}

function bindPersonalityEvents() {
  for (let p = 0; p < data.PersTraits.length; p++) {
    const persTrait = data.PersTraits[p];

    $("." + persTrait.Id + "-radio").change(function() {
      const value = parseInt(this.value);
      selectPersonality(p, value);
      
      for (let i = 0; i < persTrait.Options.length; i++) {
        const traitOption = persTrait.Options[i];

        $("#" + traitOption.Id + "Traits").find("input[type=checkbox]").prop('checked', false);
        if (value === i) {
          $("#" + traitOption.Id + "Traits").show();
        }
        else {
          $("#" + traitOption.Id + "Traits").hide();
        }
      }
    });

    for (let o = 0; o < persTrait.Options.length; o++) {
      const option = persTrait.Options[o];
      for (let i = 0; i < option.Abilities.length; i++) {
        $("#" + option.Id + "Trait" + i).change(function() {
          selectedTraitChanged(p, o, i, this.checked);
        });
      }

      for (let i = 0; i < option.CharTraits.length; i++) {
        $("#" + option.Id + "CharTrait" + i).change(function() {
          selectedCharTraitChanged(p, o, i, this.checked);
        });
      }
    }
  }
}

function buildFlawControls() {
  for (const category of data.FlawData.Categories) {
    $("#flawCategory").append('<option>' + category + '</option>');
  }

  for (const dna of data.FlawData.Dnas) {
    $("#flawDna").append('<option>' + dna + '</option>');
  }

  let effects = [];
  for (const intensity of data.FlawData.Intensities) {
    $("#flawIntensity").append('<option>' + intensity.Name + '</option>');
    if (effects.length === 0) {
      effects = intensity.Effects;
    }
  }

  for (const effect of effects) {
    $("#flawEffect").append('<option>' + effect + '</option>');
  }
}

function fillFlaws() {
  $("#flawList").html("");
  for (let i = 0; i < trackedData.Flaws.length; i++) {
    const flaw = trackedData.Flaws[i];
    let rowCont = "";
    rowCont += '<div class="mt-1 card">';
    rowCont += '<div class="card-body p-2">';
    rowCont += '<label>';
    rowCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteFlaw(' + i + ')"><i class="bi-trash"></i></button>';
    rowCont += ' ' + flaw.Name + ' ';
    rowCont += '<small class="text-secondary">(' + flaw.Category + ' - ' + flaw.Dna + ' - ' + flaw.Intensity + ')</small>';
    rowCont += '</label>';
    rowCont += '<hr class="m-0" />';
    rowCont += flaw.Effect;
    rowCont += '</div>';
    rowCont += '</div>';
    $("#flawList").append(rowCont);
  }
}

function addFlaw() {
  const flawName = $("#flawName").val();
  const flawCategory = $("#flawCategory").val();
  const flawDna = $("#flawDna").val();
  const flawIntensity = $("#flawIntensity").val();
  const flawEffect = $("#flawEffect").val();
  
  let flaws = trackedData.Flaws;
  flaws.push({"Name": flawName, "Category": flawCategory, "Dna": flawDna, "Intensity": flawIntensity, "Effect": flawEffect});
  onTrackedDataChange("Flaws", flaws);
  fillFlaws();
}

function deleteFlaw(index) {
  let flaws = trackedData.Flaws;
  flaws.splice(index, 1);
  onTrackedDataChange("Flaws", flaws);
  fillFlaws();
}

function bindFlawEvents() {
  $("#addFlawButton").click(function() {
    addFlaw();
  });

  $("#flawIntensity").change(function() {
    const value = $(this).val();
    let effects = [];
    for (const intensity of data.FlawData.Intensities) {
      if (intensity.Name === value) {
        effects = intensity.Effects;
      }
    }

    $("#flawEffect").html("");
    for (const effect of effects) {
      $("#flawEffect").append('<option>' + effect + '</option>');
    }
  });
}

function fillDnaSkillOptions(index) {
  let skillsCont = "";
  for(let i = 0; i < data.DnaData.Skills[index].length; i++) {
    let isPicked = false;
    const skills = trackedData.Skills;
    for (const skill of skills[index]) {
      if (skill.Index == i) {
        isPicked = true;
        break;
      }
    }
    
    if (isPicked) {
      continue;
    }
    
    const skill = data.DnaData.Skills[index][i];
    skillsCont += '<option value="' + i + '">' + skill.Name + '</option>';
  }
  
  $("#dnaSkill").html(skillsCont);
}

function bindSkillEvents() {
  $("#dnaType").change(function() {
    const index = parseInt($(this).val());
    fillDnaSkillOptions(index);
  });

  $(".dnaRange").change(function() {
    dnaBalanceChanged();
  });

  $("#addSkillButton").click(function() {
    addSkill();
  });
}

function fillDnaSkills(index) {
  for (let s = 0; s < 3; s++) {
    const id = s == 0 ? "#physSkills" : ( s == 1 ? "#emoSkills" : "#intSkills" );
    
    $(id).html("");
    const skills = trackedData.Skills;
    for (let i = 0; i < skills[s].length; i++) {
      const skill = skills[s][i];
      let skillCont = "";
      skillCont += '<div class="col-sm-6 col-md-4">';
      skillCont += '<div class="mt-1 card">';
      skillCont += '<div class="card-body p-2">';
      skillCont += '<label>';
      skillCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteSkill(' + s + ', ' + i + ')"><i class="bi-trash"></i></button>';
      skillCont += ' ' + data.DnaData.Skills[s][skill.Index].Name + ' ';
      skillCont += '<small class="text-secondary">(' + skill.Level + ')</small>';
      skillCont += '</label>';
      skillCont += '<hr class="m-0" />';
      skillCont += data.DnaData.Skills[s][skill.Index].Description;
      skillCont += '</div>';
      skillCont += '</div>';
      skillCont += '</div>';
      $(id).append(skillCont);
    }
  }
}

function addSkill() {
  const typeIndex = parseInt($("#dnaType").val());
  const level = $("#dnaSkillLevel").val();
  const skillIndex = parseInt($("#dnaSkill").val());
  
  let skills = trackedData.Skills;
  skills[typeIndex].push({"Index": skillIndex, "Level": level});
  onTrackedDataChange("Skills", skills);
  fillDnaSkills();
  fillDnaSkillOptions(typeIndex);
}

function deleteSkill(type, index) {
  let skills = trackedData.Skills;
  skills[type].splice(index, 1);
  onTrackedDataChange("Skills", skills);
  fillDnaSkills();

  const typeIndex = parseInt($("#dnaType").val());
  fillDnaSkillOptions(typeIndex);
}

function checkSelectedAbilities() {
  let abilities = trackedData.Abilities;
  let altered = [];
  for (let i = 0; i < abilities.length; i++) {
    const selected = abilities[i];
    const ability = data.Abilities[selected.Type][selected.Index];
    let isSatisfied = true;
    for (const req of ability.Required) {
      if (!isPersTraitPicked(req[0], req[1], req[2])) {
        isSatisfied = false;
        break;
      }
    }
    
    if (isSatisfied) {
      for (const dis of ability.Disallowed) {
        if (isPersTraitPicked(dis[0], dis[1], dis[2])) {
          isSatisfied = false;
          break;
        }
      }
    }
    
    if (isSatisfied) {
      altered.push(selected);
    }
  }

  if (altered.length !== abilities.length) {
    onTrackedDataChange("Abilities", altered);
  }
}

function fillSelectedAbilities() {
  const id = "#selectedAbilities";
  $(id).html("");
  const abilities = trackedData.Abilities;
  for (let i = 0; i < abilities.length; i++) {
    const selected = abilities[i];
    const ability = data.Abilities[selected.Type][selected.Index];
    let abilityCont = "";
    abilityCont += '<div class="col-sm-6 col-md-4">';
    abilityCont += '<div class="mt-1 card">';
    abilityCont += '<div class="card-body p-2">';
    abilityCont += '<h6 class="card-title">';
    abilityCont += '<button class="btn btn-sm btn-danger delete-button" onclick="deleteAbility(' + i + ')"><i class="bi-trash"></i></button>';
    abilityCont += ' ' + ability.Name + ' ';
    abilityCont += '<button class="btn btn-sm btn-light expand-button"><i class="bi-chevron-bar-expand"></i></button>';
    abilityCont += '</h6>';
    abilityCont += '<small class="long-desc shortened-desc">' + ability.Description + '</small>';
    abilityCont += '</div>';
    abilityCont += '</div>';
    abilityCont += '</div>';
    $(id).append(abilityCont);
  }

  bindAbilityEvents();
}

function isPersTraitPicked(persIndex, optionIdex, traitIndex) {
  if (trackedData.PersonalityData[persIndex].Selected !== optionIdex) {
    return false;
  }
  
  if (traitIndex < 0) {
    return true;
  }
  
  for (const passive of trackedData.PersonalityData[persIndex].Passives) {
    if (passive === traitIndex) {
      return true;
    }
  }
  
  return false;
}

function fillAbilities() {
  for (let s = 0; s < 3; s++) {
    const id = s == 0 ? "#physAbilityOptions" : ( s == 1 ? "#emoAbilityOptions" : "#intAbilityOptions" );
    
    $(id).html("");
    const abilities = trackedData.Abilities;
    for (let i = 0; i < data.Abilities[s].length; i++) {
      let isSelected = false;
      for (const selected of abilities) {
        if (s === selected.Type && i === selected.Index) {
          isSelected = true;
          break;
        }
      }
      
      if (isSelected) {
        continue;
      }

      const ability = data.Abilities[s][i];
      let isSatisfied = true;
      for (const req of ability.Required) {
        if (!isPersTraitPicked(req[0], req[1], req[2])) {
          isSatisfied = false;
          break;
        }
      }
      
      if (isSatisfied) {
        for (const dis of ability.Disallowed) {
          if (isPersTraitPicked(dis[0], dis[1], dis[2])) {
            isSatisfied = false;
            break;
          }
        }
      }

      let abilityCont = "";
      abilityCont += '<div class="col-sm-6 col-md-4">';
      abilityCont += '<div class="mt-1 card">';
      abilityCont += '<div class="card-body p-2">';
      abilityCont += '<h6 class="card-title">';
      abilityCont += '<button class="btn btn-sm btn-light add-button" ' + (isSatisfied ? "" : "disabled") + ' onclick="addAbility(' + s + ', ' + i + ')"><i class="bi-plus-square"></i></button>';
      abilityCont += ' ' + ability.Name + ' ';
      if (!isSatisfied) {
        abilityCont += '<small class="text-secondary">Not satisfied</small>';
      }
      abilityCont += '<button class="btn btn-sm btn-light expand-button"><i class="bi-chevron-bar-expand"></i></button>';
      abilityCont += '</h6>';
      abilityCont += '<small class="long-desc shortened-desc">' + ability.Description + '</small>';
      abilityCont += '<hr class="m-0" />';

      for (const req of ability.Required) {
        let isValid = false;
        let reqCont = "";
        if (req[2] < 0) {
          reqCont = data.PersTraits[req[0]].Options[req[1]].Name;
        }
        else {
          reqCont = data.PersTraits[req[0]].Options[req[1]].Abilities[req[2]].Name;
        }

        abilityCont += '<small class="text-primary me-2">' + reqCont + '</small> ';
      }
      
      for (const dis of ability.Disallowed) {
        let disCont = "";
        if (dis[2] < 0) {
          disCont = data.PersTraits[dis[0]].Options[dis[1]].Name;
        }
        else {
          disCont = data.PersTraits[dis[0]].Options[dis[1]].Abilities[dis[2]].Name;
        }

        abilityCont += '<small class="text-danger me-2">' + disCont + '</small> ';
      }
      
      abilityCont += '&nbsp;';
      abilityCont += '</div>';
      abilityCont += '</div>';
      abilityCont += '</div>';
      $(id).append(abilityCont);
    }
  }

  bindAbilityEvents();
}

function bindAbilityEvents() {
  $(".expand-button").off('click').click(function() {
    $(this).parent().parent().children(".long-desc").toggleClass("shortened-desc");
  });
}

function addAbility(type, index) {
  let abilities = trackedData.Abilities;
  abilities.push({"Type":type, "Index":index});
  onTrackedDataChange("Abilities", abilities);
  fillSelectedAbilities();
  fillAbilities();
}

function deleteAbility(index) {
  let abilities = trackedData.Abilities;
  abilities.splice(index, 1);
  onTrackedDataChange("Abilities", abilities);
  fillSelectedAbilities();
  fillAbilities();
}

function fillMotives() {
  let options = "";
  for (const motive of data.Motives) {
    options += '<option>' + motive.Motive + '</option>'
  }
  
  $("#motiveType").html(options);
}

function showPage(number, onEnd) {
  if (number === 5) {
    fillSelectedAbilities();
    fillAbilities();
  }
  else if (number === 8) {
    buildMcs();
  }
  
  for (let i = 1; i <= pageCount; i++) {
    if (i == number) {
      $( "#row" + i ).delay(500).animate({
        opacity: 1.0,
      }, 500, function() {
        // Animation complete.
      });
    }
    else {
      $( "#row" + i ).animate({
        opacity: 0.0,
      }, 500, function() {
        // Animation complete.
      });
    }
  }

  const offset = 100 * (number - 1);
  $( ".page-container" ).animate({
    marginLeft: "-" + offset + "%",
    marginRight: offset + "%"
  }, 1000, function() {
    if (onEnd !== undefined) {
      onEnd();
    }
  });
}

function onTraitSelectChanged(selectElement) {
  let totalSelected = 0;
  $(selectElement).children().map(function() {
    if ($(this).is(':selected')) {
      totalSelected++;
    }
  });
  
  if (totalSelected < 2) {
    $(selectElement).children().map(function() {
      $(this).prop("disabled", false);
    });
  }
  else {
    $(selectElement).children().map(function() {
      if (!$(this).is(':selected')) {
        $(this).prop("disabled", true);
      }
    });
  }
}

function dnaBalanceChanged() {
  const phys = parseInt($("#phsicalityRange").val());
  const emoFort = parseInt($("#emoFortidueRange").val());
  const intel = parseInt($("#intellectRange").val());
  
  onTrackedDataChange("DnaBalance", [phys, emoFort, intel]);
  
  $("#phsicalityRangeVal").html(phys);
  $("#emoFortidueRangeVal").html(emoFort);
  $("#intellectRangeVal").html(intel);
  $("#dnaBalance").html((phys + emoFort + intel));
}

function toggle(identifier) {
  $(identifier).toggle();
}

function calculatePoints() {
  
}

function onTrackedDataChange(key, value) {
  trackedData[key] = value;
  console.log(trackedData);
  
  if (key === "PersonalityData") {
    checkSelectedAbilities();
  }
}

$(document).ready(function() {
  console.log(window.location);
  const windowHeight = $(window).height();
  //$(".customization-page").css( "min-height", "" + windowHeight + "px" );
  
  fillCustomizations();

  fillPersonalityTrackedData();
  buildPersonalityControls("#personalityForm");
  bindPersonalityEvents();
  
  buildFlawControls();
  bindFlawEvents();

  bindSkillEvents();

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
      trigger: 'hover focus'
    });
  });

  for (let i = 1; i <= pageCount; i++) {
    $( "#link" + i ).click(function() {
      showPage(i);
    });
  }

  $("#linkPrev").click(function() {
    showPage(i);
  });
  
  showPage(currentPage, function() {
    console.log("done");
    $("#loadingOverlay").hide();
  });
  
  $('.trait-select').change(function() {
    onTraitSelectChanged(this);
  });
  
  $('.help-desc-button').click(function() {
    const id = "#" + $(this).data("target");
    $(".toggle-desc:not(" + id + ")").hide();
    $(id).toggle();
  });

  fillDnaSkillOptions(0);
  fillSelectedAbilities();
  fillAbilities();
  
  fillMotives();
  
  $('.ability-options').toggle();
  
  $("select.tracked-data").change(function() {
    const index = $(this).prop("selectedIndex");
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, index);
  });
  
  $("input[type=text].tracked-data").change(function() {
    const value = $(this).val();
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, value);
  });
  
  $("textarea.tracked-data").change(function() {
    const value = $(this).val();
    const key = $(this).data("sdtarget");
    onTrackedDataChange(key, value);
  });
});